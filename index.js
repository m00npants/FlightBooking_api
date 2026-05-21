import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// OpenAI setup
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
    try {
        const { messages } = req.body;

        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: messages,
        });

        res.json({
            reply: response.choices[0].message.content,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "OpenAI request failed" });
    }
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});