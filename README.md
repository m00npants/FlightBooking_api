![Lexicon Logo](https://lexicongruppen.se/media/wi5hphtd/lexicon-logo.svg)
# ✈️ Flight Reservation – Project Test
# ✈️ Flight Reservation – AI Powered Booking System

![Lexicon Logo](https://lexicongruppen.se/media/wi5hphtd/lexicon-logo.svg)

---

## 🧠 Overview

This is a **full-stack flight reservation system** enhanced with an **AI-powered assistant** using OpenAI.

The system allows users to:
- 🔎 Search flights
- 🧾 Book flights
- ❌ Cancel bookings
- 🤖 Chat with an AI travel assistant

---

## 🤖 AI Assistant

### System Behavior

The AI assistant is configured as a **flight booking expert**:

> You are a flight booking assistant.  
> Help users search flights, book flights, and cancel bookings.  
> If information is missing, ask follow-up questions.  
> Be concise, helpful, and structured.

---

## 🛠️ Planned Tool Calling (Advanced Feature)

The assistant can be extended with function calling / tools:

- `searchFlights(origin, destination, date)`
- `bookFlight(flightId, passengers)`
- `cancelBooking(bookingId)`

### 🚀 What this enables:
The AI will not only respond — it can **execute real actions** inside the system.

---

## 📦 Tech Stack

### 🖥️ Frontend
- React
- TailwindCSS
- React Router

### ⚙️ Backend
- Node.js
- Express
- OpenAI API
- CORS
- dotenv

---

## ✨ Key Features

| Feature                   | Status        |
|--------------------------|--------------|
| ✈️ Flight Search         | ✅ Done       |
| 🧾 Flight Booking        | ✅ Done       |
| ❌ Booking Cancellation  | ✅ Done       |
| 🤖 AI Chat Assistant     | ✅ Done       |
| 🔧 Tool Calling          | 🚧 Planned    |
| 🗄️ Database Integration  | 🚧 Planned    |

---

## 📸 UI Preview

- 🏠 Home page with AI-powered flight search
- ✈️ Flight listing page
- 🧾 Booking modal system
- 🤖 Floating AI chatbot assistant

---

## 🚧 Known Issues

- ⚠️ Backend must be running for AI chat to work
- ⚠️ Requires valid OpenAI API key
- ⚠️ No database yet (uses localStorage / in-memory storage)

---

## 🌍 Future Improvements

- 🗄️ PostgreSQL / MongoDB integration
- 🌐 Real flight API (Amadeus / Skyscanner)
- 🔐 Authentication (JWT login system)
- 💳 Payment integration
- 🤖 Advanced AI tool calling (fully autonomous booking agent)

---

## 👨‍💻 Author

**Developed by:** Moonpants  
🔗 GitHub: https://github.com/m00npants/FlightBooking_API

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and modify it.

---