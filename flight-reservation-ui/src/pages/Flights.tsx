import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAvailableFlights } from "../api/flights";

export default function Available() {
    const [flights, setFlights] = useState<any[]>([]);
    const navigate = useNavigate();

    const [selectedFlight, setSelectedFlight] = useState<any>(null);

    const [passengers, setPassengers] = useState<any[]>([
        { name: "", seatClass: "economy", extraLuggage: false }
    ]);

    useEffect(() => {
        getAvailableFlights().then(setFlights);
    }, []);

    // add passenger row
    const addPassenger = () => {
        setPassengers([
            ...passengers,
            { name: "", seatClass: "economy", extraLuggage: false }
        ]);
    };

    // update passenger
    const updatePassenger = (index: number, field: string, value: any) => {
        const updated = [...passengers];
        updated[index][field] = value;
        setPassengers(updated);
    };

    // BOOK FLIGHT
    const handleConfirmBooking = () => {
        if (!selectedFlight) return;

        const existing = JSON.parse(localStorage.getItem("bookings") || "[]");

        const newBooking = {
            bookingId: Date.now(),

            id: selectedFlight.id,
            origin: selectedFlight.origin,
            destination: selectedFlight.destination,

            date: selectedFlight.date || "2026-01-01",
            time: selectedFlight.time || "10:00",
            gate: selectedFlight.gate || "A1",
            price: selectedFlight.price || "$412",

            passengers
        };

        localStorage.setItem(
            "bookings",
            JSON.stringify([...existing, newBooking])
        );

        setSelectedFlight(null);
        setPassengers([{ name: "", seatClass: "economy", extraLuggage: false }]);

        navigate("/book");
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
                            className="text-[#000f22] border-b-2 border-cyan-500 pb-1"
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
                            className="text-gray-500 hover:text-[#000f22]"
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

            {/* FLIGHTS */}
            <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
                <h1 className="text-4xl font-black">Available Flights</h1>

                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    {flights.map((f: any) => (
                        <div key={f.id} className="bg-white p-6 rounded-3xl border">

                            <h2 className="font-black text-xl">
                                {f.origin} → {f.destination}
                            </h2>

                            <p className="text-sm text-gray-400 mt-2">
                                Flight ID: {f.id}
                            </p>

                            <button
                                onClick={() => setSelectedFlight(f)}
                                className="w-full mt-6 bg-cyan-500 text-white py-3 rounded-xl font-bold"
                            >
                                Book Flight
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* BOOKING MODAL */}
            {selectedFlight && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">

                    <div className="bg-white w-[520px] rounded-3xl p-6">

                        <h2 className="text-2xl font-black">Book Flight</h2>

                        <p className="text-sm text-gray-500">
                            {selectedFlight.origin} → {selectedFlight.destination}
                        </p>

                        {/* PASSENGERS */}
                        <div className="mt-5 space-y-4 max-h-[300px] overflow-y-auto">

                            {passengers.map((p, i) => (
                                <div key={i} className="border rounded-xl p-3">

                                    <input
                                        className="w-full border p-2 rounded-lg"
                                        placeholder="Passenger name"
                                        value={p.name}
                                        onChange={(e) =>
                                            updatePassenger(i, "name", e.target.value)
                                        }
                                    />

                                    <select
                                        className="w-full mt-2 border p-2 rounded-lg"
                                        value={p.seatClass}
                                        onChange={(e) =>
                                            updatePassenger(i, "seatClass", e.target.value)
                                        }
                                    >
                                        <option value="economy">Economy</option>
                                        <option value="first">First Class</option>
                                    </select>

                                    <label className="flex justify-between mt-2 text-sm">
                                        Extra Luggage
                                        <input
                                            type="checkbox"
                                            checked={p.extraLuggage}
                                            onChange={(e) =>
                                                updatePassenger(i, "extraLuggage", e.target.checked)
                                            }
                                        />
                                    </label>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={addPassenger}
                            className="mt-4 text-cyan-600 font-bold"
                        >
                            + Add Passenger
                        </button>

                        {/* ACTIONS */}
                        <div className="flex gap-3 mt-6">

                            <button
                                onClick={() => setSelectedFlight(null)}
                                className="flex-1 bg-gray-200 py-3 rounded-xl font-bold"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleConfirmBooking}
                                className="flex-1 bg-cyan-500 text-white py-3 rounded-xl font-bold"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* CHATBOT (SAME STYLE AS HOME) */}
            <SkyNavAI />
        </div>
    );
}

/* ================= CHATBOT (FROM HOME PAGE) ================= */


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
    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = {
            role: "user",
            text: input,
        };

        const updatedMessages = [...messages, userMessage];

        setMessages(updatedMessages);
        setInput("");

        try {
            const res = await fetch("http://localhost:5000/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: updatedMessages.map((m) => ({
                        role: m.role,
                        content: m.text,
                    })),
                }),
            });

            if (!res.ok) throw new Error("Server error");

            const data = await res.json();

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    text: data.reply,
                },
            ]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    text: "Backend not running or OpenAI error.",
                },
            ]);
        }
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