import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// -------------------------------
// SYSTEM PROMPT (IMPORTANT)
// -------------------------------
const SYSTEM_MESSAGE = {
    role: "system",
    content: `
You are a flight booking assistant.

You can help users with:
1. Searching flights
2. Booking a flight
3. Cancelling a flight

Rules:
- Always ask for missing information step by step (origin, destination, date, passengers)
- Be concise and helpful
- If user wants to book, confirm details first
- If user wants to cancel, ask for booking ID or email

You may output actions in JSON when needed:

SEARCH_FLIGHTS: { origin, destination, date }
BOOK_FLIGHT: { origin, destination, date, passengers }
CANCEL_FLIGHT: { bookingId }

Otherwise respond normally in text.
`
};

// -------------------------------
// In-memory chat history
// -------------------------------
let chatHistory = [SYSTEM_MESSAGE];

// -------------------------------
// API ENDPOINT
// -------------------------------
app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        // Add user message
        chatHistory.push({
            role: "user",
            content: message,
        });

        // Limit memory (last 12 messages)
        chatHistory = [
            SYSTEM_MESSAGE,
            ...chatHistory.slice(-12),
        ];

        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: chatHistory,
        });

        const reply = response.choices[0].message.content;

        // Save assistant response
        chatHistory.push({
            role: "assistant",
            content: reply,
        });

        res.json({ reply });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "OpenAI request failed",
        });
    }
});

// -------------------------------
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});