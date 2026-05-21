import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Booking() {
    const [bookings, setBookings] = useState<any[]>([]);
    const [view, setView] = useState<any>(null);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("bookings") || "[]");
        setBookings(saved);
    }, []);

    const cancelBooking = (id: number) => {
        const updated = bookings.filter((b) => b.bookingId !== id);
        setBookings(updated);
        localStorage.setItem("bookings", JSON.stringify(updated));
    };

    return (
        <div className="bg-[#f7fafd] min-h-screen">

            {/* NAVBAR */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200">

                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                    {/* LOGO */}
                    <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-full bg-[#000f22] flex items-center justify-center text-white">
                            ✈
                        </div>

                        <h1 className="font-black text-xl tracking-tight text-[#000f22]">
                            SKYNAV
                        </h1>
                    </div>

                    {/* NAV */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">

                        <Link
                            to="/"
                            className="text-gray-500 hover:text-[#000f22]"
                        >
                            Home
                        </Link>

                        <Link
                            to="/flights"
                            className="text-gray-500 hover:text-[#000f22]"
                        >
                            Flights
                        </Link>

                        <Link
                            to="/available"
                            className="text-gray-500 hover:text-[#000f22]"
                        >
                            Available
                        </Link>

                        <Link
                            to="/book"
                            className="text-[#000f22] border-b-2 border-cyan-500 pb-1"
                        >
                            Bookings
                        </Link>
                    </nav>

                    {/* PROFILE */}
                    <div className="flex items-center gap-4">

                        <button className="text-gray-500 hover:text-black">
                            🔔
                        </button>

                        <div className="w-10 h-10 rounded-full overflow-hidden border">

                            <img
                                src="https://i.pravatar.cc/100"
                                alt="profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 pt-28">

                <h1 className="text-4xl font-black">Your Bookings</h1>

                <div className="grid md:grid-cols-2 gap-6 mt-10">

                    {bookings.map((b) => (
                        <div key={b.bookingId} className="bg-white p-6 rounded-3xl border">

                            <h2 className="font-black text-xl">
                                {b.origin} → {b.destination}
                            </h2>

                            <p className="text-sm text-gray-500 mt-2">
                                {b.date} • {b.time || "10:00"}
                            </p>

                            <p className="text-sm mt-2">
                                Passengers: {b.passengers?.length || 0}
                            </p>

                            <div className="flex gap-3 mt-5">

                                <button
                                    onClick={() => setView(b)}
                                    className="flex-1 bg-gray-100 py-2 rounded-xl font-bold"
                                >
                                    View
                                </button>

                                <button
                                    onClick={() => cancelBooking(b.bookingId)}
                                    className="flex-1 bg-red-500 text-white py-2 rounded-xl font-bold"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* VIEW MODAL */}
            {view && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]">

                    <div className="bg-white w-[600px] rounded-3xl p-6 shadow-2xl">

                        <div className="flex justify-between">
                            <div>
                                <h2 className="text-2xl font-black">Boarding Pass</h2>
                                <p className="text-sm text-gray-500">ID: {view.bookingId}</p>
                            </div>

                            <button onClick={() => setView(null)} className="text-xl font-black">✕</button>
                        </div>

                        {/* FLIGHT INFO */}
                        <div className="mt-6 bg-[#000f22] text-white rounded-2xl p-5">

                            <div className="flex justify-between items-center">

                                <div>
                                    <p className="text-xs text-cyan-300">Origin</p>
                                    <h3 className="font-black">{view.origin}</h3>
                                </div>

                                <div className="text-2xl">✈</div>

                                <div className="text-right">
                                    <p className="text-xs text-cyan-300">Destination</p>
                                    <h3 className="font-black">{view.destination}</h3>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 mt-5 text-sm">
                                <div>
                                    <p className="text-cyan-300 text-xs">Date</p>
                                    <p className="font-bold">{view.date || "2026-01-01"}</p>
                                </div>

                                <div>
                                    <p className="text-cyan-300 text-xs">Time</p>
                                    <p className="font-bold">{view.time || "10:00"}</p>
                                </div>

                                <div>
                                    <p className="text-cyan-300 text-xs">Gate</p>
                                    <p className="font-bold">{view.gate || "B12"}</p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-cyan-300 text-xs">Flight ID</p>
                                <p className="font-bold">{view.id}</p>
                            </div>
                        </div>

                        {/* PRICE */}
                        <div className="mt-5 bg-gray-50 border rounded-2xl p-4">
                            <p className="text-xs text-gray-500">Total Price</p>
                            <h3 className="text-3xl font-black text-[#000f22]">
                                {view.price || "$412"}
                            </h3>
                        </div>

                        {/* PASSENGERS */}
                        <div className="mt-5">
                            <h3 className="font-black mb-3">Passengers</h3>

                            <div className="space-y-3 max-h-[200px] overflow-y-auto">
                                {view.passengers?.map((p: any, i: number) => (
                                    <div key={i} className="border rounded-xl p-3">
                                        <div className="flex justify-between">
                                            <p className="font-bold">{p.name}</p>
                                            <p className="text-sm text-cyan-600 font-bold">
                                                {p.seatClass}
                                            </p>
                                        </div>

                                        <p className="text-xs text-gray-500">
                                            Extra luggage: {p.extraLuggage ? "Yes" : "No"}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => setView(null)}
                            className="w-full mt-6 bg-cyan-500 text-white py-3 rounded-xl font-bold"
                        >
                            Close Ticket
                        </button>
                    </div>
                </div>
            )}

            {/* CHATBOT (SKYNAV AI - SAME AS HOME) */}
            <SkyNavAI />
        </div>
    );
}

/* ================= CHATBOT ================= */

/* AI CHATBOT */

function SkyNavAI() {

    const [open, setOpen] = useState(false);

    const [messages, setMessages] = useState([
        {
            role: "assistant",
            text: "Hello 👋 I can help you search flights, compare prices and manage bookings."
        }
    ]);

    const [input, setInput] = useState("");

    // SEND MESSAGE
    const handleSend = () => {

        if (!input.trim()) return;

        const userMessage = {
            role: "user",
            text: input
        };

        let aiReply =
            "I can help you with flights, prices and travel recommendations ✈";

        // SIMPLE AI RESPONSES
        if (
            input.toLowerCase().includes("tokyo")
        ) {

            aiReply =
                "Flights to Tokyo currently start from $742 next week ✈";
        }

        else if (
            input.toLowerCase().includes("cheap")
        ) {

            aiReply =
                "The cheapest flights are usually on Tuesdays and Wednesdays.";
        }

        else if (
            input.toLowerCase().includes("booking")
        ) {

            aiReply =
                "You can manage your bookings from the Bookings page.";
        }

        else if (
            input.toLowerCase().includes("hello")
        ) {

            aiReply =
                "Hello 👋 How can I help you today?";
        }

        else if (
            input.toLowerCase().includes("flight")
        ) {

            aiReply =
                "I can help you compare flights and destinations instantly.";
        }

        const assistantMessage = {
            role: "assistant",
            text: aiReply
        };

        setMessages([
            ...messages,
            userMessage,
            assistantMessage
        ]);

        setInput("");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[999]">

            {/* CHAT WINDOW */}
            {open && (

                <div className="w-[380px] h-[560px] bg-white rounded-[32px] shadow-2xl border overflow-hidden mb-5 flex flex-col animate-[fadeIn_.2s_ease]">

                    {/* HEADER */}
                    <div className="bg-[#000f22] text-white p-5 flex items-center justify-between">

                        <div>

                            <h3 className="font-black text-xl">
                                SkyNav AI
                            </h3>

                            <p className="text-xs text-cyan-300">
                                AI Flight Assistant Online
                            </p>
                        </div>

                        <button
                            onClick={() => setOpen(false)}
                            className="text-2xl hover:text-cyan-300 transition"
                        >
                            ×
                        </button>
                    </div>

                    {/* MESSAGES */}
                    <div className="flex-1 p-5 overflow-y-auto bg-[#f7fafd] space-y-4">

                        {messages.map((message, index) => (

                            <div
                                key={index}
                                className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                                    message.role === "user"
                                        ? "ml-auto bg-cyan-500 text-white"
                                        : "bg-white shadow-sm text-gray-800"
                                }`}
                            >
                                {message.text}
                            </div>
                        ))}
                    </div>

                    {/* INPUT */}
                    <div className="p-4 border-t bg-white flex gap-3">

                        <input
                            type="text"
                            value={input}
                            onChange={(e) =>
                                setInput(e.target.value)
                            }
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSend();
                                }
                            }}
                            placeholder="Ask SkyNav AI..."
                            className="flex-1 border rounded-2xl px-4 py-3 outline-none focus:border-cyan-500"
                        />

                        <button
                            onClick={handleSend}
                            className="bg-cyan-500 hover:bg-cyan-400 transition text-white px-5 rounded-2xl font-bold"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}

            {/* CHAT BUBBLE */}
            {!open && (

                <div className="absolute bottom-24 right-0 animate-[floatBubble_3s_ease-in-out_infinite]">

                    <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl px-5 py-4 w-[260px]">

                        <div className="flex items-center gap-2 mb-2">

                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />

                            <p className="text-xs font-bold text-green-600">
                                AI Assistant Online
                            </p>
                        </div>

                        <p className="font-black text-[#000f22] text-sm">
                            Need help with your booking?
                        </p>

                        <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                            Ask me about tickets flights and prices ✈
                        </p>

                        <div className="absolute bottom-[-7px] right-8 w-4 h-4 bg-white border-r border-b border-gray-200 rotate-45" />
                    </div>
                </div>
            )}

            {/* BUTTON */}
            <button
                onClick={() => setOpen(!open)}
                className="relative w-16 h-16 rounded-full bg-cyan-500 hover:bg-cyan-400 transition shadow-2xl flex items-center justify-center text-white text-3xl"
            >

                {/* PING EFFECT */}
                <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-30" />

                🤖
            </button>

            {/* ANIMATIONS */}
            <style>
                {`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(12px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }

                    50% {
                        transform: translateY(-6px);
                    }
                }
                `}
            </style>
        </div>
    );
}