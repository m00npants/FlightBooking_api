import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {

    // SEARCH STATES
    const [origin, setOrigin] = useState("London");
    const [destination, setDestination] = useState("New York");
    const [departure, setDeparture] = useState("2025-10-24");
    const [passengers, setPassengers] = useState(1);

    return (
        <div className="bg-[#f7fafd] min-h-screen text-[#181c1e]">

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
                            className="text-[#000f22] border-b-2 border-cyan-500 pb-1"
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

            {/* HERO */}
            <section className="relative h-[760px] overflow-hidden pt-16">

                {/* BACKGROUND */}
                <img
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
                    alt="plane"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#000f22]/90 to-[#000f22]/20" />

                {/* CONTENT */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">

                    <div className="max-w-3xl">

                        <p className="uppercase tracking-[0.3em] text-cyan-300 font-bold text-sm">
                            AI Powered Aviation Platform
                        </p>

                        <h1 className="text-7xl font-black text-white leading-tight mt-6">
                            Fly Smarter.
                            <br />
                            Travel Faster.
                        </h1>

                        <p className="text-gray-200 mt-8 text-xl leading-relaxed max-w-2xl">
                            Experience next-generation flight booking with
                            intelligent search, predictive pricing,
                            real-time aviation analytics and AI-powered
                            travel assistance.
                        </p>
                    </div>

                    {/* SEARCH CARD */}
                    <div className="bg-white mt-12 rounded-[32px] p-8 max-w-6xl shadow-2xl border border-white/50">

                        {/* TABS */}
                        <div className="flex flex-wrap gap-3 mb-8">

                            <button className="bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                                One Way
                            </button>

                            <button className="bg-gray-100 hover:bg-gray-200 transition px-6 py-3 rounded-full font-semibold text-gray-600">
                                Round Trip
                            </button>

                            <button className="bg-gray-100 hover:bg-gray-200 transition px-6 py-3 rounded-full font-semibold text-gray-600">
                                Multi-City
                            </button>
                        </div>

                        {/* SEARCH */}
                        <div className="grid md:grid-cols-4 gap-4">

                            <EditableSearchBox
                                title="Origin"
                                value={origin}
                                onChange={setOrigin}
                                placeholder="London"
                            />

                            <EditableSearchBox
                                title="Destination"
                                value={destination}
                                onChange={setDestination}
                                placeholder="New York"
                            />

                            <DateSearchBox
                                title="Departure"
                                value={departure}
                                onChange={setDeparture}
                            />

                            <PassengerSearchBox
                                title="Passengers"
                                value={passengers}
                                onChange={setPassengers}
                            />
                        </div>

                        {/* BUTTON */}
                        <div className="flex justify-end mt-8">

                            <Link
                                to="/flights"
                                className="bg-cyan-500 hover:bg-cyan-400 transition text-white px-12 py-4 rounded-2xl font-bold shadow-xl text-lg"
                            >
                                Search Flights →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* LIVE STATS */}
            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid md:grid-cols-4 gap-6">

                    <StatsCard
                        title="Flights Today"
                        value="12,842"
                        subtitle="+18% from yesterday"
                    />

                    <StatsCard
                        title="Active Airlines"
                        value="214"
                        subtitle="Worldwide coverage"
                    />

                    <StatsCard
                        title="Passengers"
                        value="2.4M"
                        subtitle="Flying right now"
                    />

                    <StatsCard
                        title="Average Delay"
                        value="14 min"
                        subtitle="Global average"
                    />
                </div>
            </section>

            {/* DESTINATIONS */}
            <section className="max-w-7xl mx-auto px-6 pb-24">

                <div className="mb-12">

                    <p className="uppercase tracking-widest text-cyan-600 text-sm font-bold">
                        Popular Routes
                    </p>

                    <h2 className="text-5xl font-black text-[#000f22] mt-3">
                        Trending Destinations
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    <DestinationCard
                        city="Tokyo"
                        country="Japan"
                        price="$742"
                        image="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1971&auto=format&fit=crop"
                    />

                    <DestinationCard
                        city="Paris"
                        country="France"
                        price="$520"
                        image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1973&auto=format&fit=crop"
                    />

                    <DestinationCard
                        city="Dubai"
                        country="UAE"
                        price="$890"
                        image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1974&auto=format&fit=crop"
                    />
                </div>
            </section>

            {/* INSIGHTS */}
            <section className="max-w-7xl mx-auto px-6 pb-24">

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* AI */}
                    <div className="bg-white rounded-[32px] p-8 shadow-lg border">

                        <div className="inline-flex bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
                            AI Price Forecast
                        </div>

                        <h3 className="text-4xl font-black mt-6 text-[#000f22]">
                            Smart Booking Suggestions
                        </h3>

                        <p className="text-gray-600 mt-5 text-lg leading-relaxed">
                            Our AI predicts ticket prices may rise within
                            the next 48 hours for most international
                            destinations.
                        </p>

                        <div className="mt-10 bg-gray-50 rounded-3xl p-8 border">

                            <p className="text-sm text-gray-500">
                                Cheapest Route Today
                            </p>

                            <h4 className="text-6xl font-black mt-2">
                                $412
                            </h4>

                            <p className="text-gray-500 mt-3">
                                London → New York
                            </p>
                        </div>
                    </div>

                    {/* ECO */}
                    <div className="bg-[#000f22] text-white rounded-[32px] p-8 relative overflow-hidden">

                        <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />

                        <div className="relative">

                            <div className="inline-flex bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold">
                                Sustainability
                            </div>

                            <h3 className="text-4xl font-black mt-6">
                                Carbon Efficient Flights
                            </h3>

                            <p className="text-gray-300 mt-5 text-lg leading-relaxed">
                                64% of recommended flights use SAF-powered
                                fleets or modern low-emission aircraft.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-10">

                                <div className="bg-white/5 rounded-3xl p-6 border border-white/10">

                                    <p className="text-xs text-gray-400 uppercase">
                                        CO₂ Savings
                                    </p>

                                    <h4 className="text-4xl font-black mt-3">
                                        -12.4kg
                                    </h4>
                                </div>

                                <div className="bg-white/5 rounded-3xl p-6 border border-white/10">

                                    <p className="text-xs text-gray-400 uppercase">
                                        Fleet Age
                                    </p>

                                    <h4 className="text-4xl font-black mt-3">
                                        3.2 Yrs
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI CHATBOT */}
            <SkyNavAI />
        </div>
    );
}

/* SEARCH INPUT */

function EditableSearchBox({
                               title,
                               value,
                               onChange,
                               placeholder
                           }: any) {

    return (
        <div className="border rounded-3xl p-5 hover:border-cyan-400 transition">

            <p className="text-xs uppercase text-gray-400 font-bold">
                {title}
            </p>

            <input
                type="text"
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                placeholder={placeholder}
                className="w-full mt-3 text-2xl font-black text-[#000f22] bg-transparent outline-none"
            />
        </div>
    );
}

/* DATE */

function DateSearchBox({
                           title,
                           value,
                           onChange
                       }: any) {

    return (
        <div className="border rounded-3xl p-5 hover:border-cyan-400 transition">

            <p className="text-xs uppercase text-gray-400 font-bold">
                {title}
            </p>

            <input
                type="date"
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                className="w-full mt-3 text-lg font-black text-[#000f22] bg-transparent outline-none"
            />
        </div>
    );
}

/* PASSENGERS */

function PassengerSearchBox({
                                title,
                                value,
                                onChange
                            }: any) {

    return (
        <div className="border rounded-3xl p-5 hover:border-cyan-400 transition">

            <p className="text-xs uppercase text-gray-400 font-bold">
                {title}
            </p>

            <div className="flex items-center justify-between mt-3">

                <button
                    onClick={() =>
                        value > 1 &&
                        onChange(value - 1)
                    }
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 font-black text-xl"
                >
                    -
                </button>

                <h3 className="text-3xl font-black text-[#000f22]">
                    {value}
                </h3>

                <button
                    onClick={() =>
                        onChange(value + 1)
                    }
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 font-black text-xl"
                >
                    +
                </button>
            </div>
        </div>
    );
}

/* STATS */

function StatsCard({
                       title,
                       value,
                       subtitle
                   }: any) {

    return (
        <div className="bg-white rounded-3xl p-7 border shadow-sm hover:shadow-xl transition">

            <p className="text-sm text-gray-500">
                {title}
            </p>

            <h3 className="text-5xl font-black text-[#000f22] mt-4">
                {value}
            </h3>

            <p className="text-sm text-cyan-600 mt-3 font-semibold">
                {subtitle}
            </p>
        </div>
    );
}

/* DESTINATION */

function DestinationCard({
                             city,
                             country,
                             price,
                             image
                         }: any) {

    return (
        <div className="relative h-[450px] rounded-[32px] overflow-hidden group cursor-pointer shadow-2xl">

            <img
                src={image}
                alt={city}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 text-white">

                <p className="text-cyan-300 font-semibold">
                    From {price}
                </p>

                <h3 className="text-5xl font-black mt-2">
                    {city}
                </h3>

                <p className="text-gray-300 text-lg">
                    {country}
                </p>
            </div>
        </div>
    );
}

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
                    message: input,
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