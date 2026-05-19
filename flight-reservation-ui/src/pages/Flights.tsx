import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAvailableFlights } from "../api/flights";

export default function Available() {
    const [flights, setFlights] = useState<any[]>([]);

    const navigate = useNavigate();

    // BOOK FUNCTION
    const handleBook = (flight: any) => {
        const existing =
            JSON.parse(localStorage.getItem("bookings") || "[]");

        const updated = [...existing, flight];

        localStorage.setItem(
            "bookings",
            JSON.stringify(updated)
        );

        navigate("/book");
    };

    useEffect(() => {
        getAvailableFlights().then(setFlights);
    }, []);

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

            {/* PAGE CONTENT */}
            <section className="max-w-7xl mx-auto px-6 pt-28 pb-20">

                {/* HEADER */}
                <div className="mb-10">
                    <p className="uppercase tracking-widest text-cyan-600 text-sm font-bold">
                        Live Inventory
                    </p>

                    <h1 className="text-4xl font-black text-[#000f22] mt-2">
                        Available Flights
                    </h1>

                    <p className="text-gray-500 mt-2 max-w-xl">
                        Browse real-time available routes and instantly
                        book the best options.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-6">

                    {flights.map((f: any) => (
                        <div
                            key={f.id}
                            className="bg-white rounded-3xl p-6 shadow-lg border hover:shadow-xl transition"
                        >

                            {/* ROUTE */}
                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-xs uppercase text-gray-400 font-bold">
                                        Origin
                                    </p>

                                    <h3 className="text-xl font-black text-[#000f22]">
                                        {f.origin}
                                    </h3>
                                </div>

                                <div className="text-cyan-500 text-xl font-black">
                                    →
                                </div>

                                <div className="text-right">
                                    <p className="text-xs uppercase text-gray-400 font-bold">
                                        Destination
                                    </p>

                                    <h3 className="text-xl font-black text-[#000f22]">
                                        {f.destination}
                                    </h3>
                                </div>
                            </div>

                            {/* FLIGHT ID */}
                            <div className="mt-6 bg-gray-50 rounded-2xl p-4 border">

                                <p className="text-xs text-gray-400 uppercase">
                                    Flight ID
                                </p>

                                <p className="font-bold text-[#000f22] mt-1">
                                    {f.id}
                                </p>
                            </div>

                            {/* BOOK BUTTON */}
                            <button
                                onClick={() => handleBook(f)}
                                className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 transition text-white py-3 rounded-xl font-bold"
                            >
                                Book Flight
                            </button>
                        </div>
                    ))}
                </div>

                {/* EMPTY STATE */}
                {flights.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No available flights at the moment.
                    </div>
                )}

                {/* CLIPPY */}
                <PaperclipAssistant />
            </section>
        </div>
    );
}

/* MICROSOFT CLIPPY */

function PaperclipAssistant() {
    return (
        <div className="fixed bottom-5 right-5 z-[999] flex items-end gap-4 pointer-events-none">

            {/* SPEECH BUBBLE */}
            <div className="relative bg-[#fff6bf] border-2 border-black rounded-xl px-5 py-4 shadow-[4px_4px_0px_rgba(0,0,0,0.25)] w-[250px] animate-[clippyBubble_3s_ease-in-out_infinite]">

                <p className="font-bold text-[13px] text-black leading-snug">
                    It looks like you're booking a flight.
                </p>

                <p className="text-[11px] text-gray-700 mt-1">
                    Would you like help finding cheaper tickets?
                </p>

                {/* TAIL */}
                <div className="absolute bottom-5 -right-[10px] w-5 h-5 bg-[#fff6bf] border-r-2 border-b-2 border-black rotate-[-45deg]" />
            </div>

            {/* CLIPPY */}
            <div className="relative w-[110px] h-[150px] animate-[clippyFloat_2.4s_ease-in-out_infinite]">

                {/* MAIN BODY */}
                <div className="absolute inset-0 rounded-[55px] rotate-[18deg] border-[10px] border-[#8b8b8b] bg-gradient-to-br from-white via-[#d6d6d6] to-[#9f9f9f] shadow-[0_10px_20px_rgba(0,0,0,0.25)]" />

                {/* INNER LOOP */}
                <div className="absolute top-[28px] left-[28px] right-[28px] bottom-[28px] rounded-[40px] border-[9px] border-[#6e6e6e]" />

                {/* OPEN GAP */}
                <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[40px] h-[36px] bg-[#f7fafd] rounded-full z-10" />

                {/* LEFT EYE */}
                <div className="absolute top-[48px] left-[30px] z-20">
                    <div className="w-[18px] h-[22px] bg-white border-[2px] border-black rounded-full flex items-center justify-center">
                        <div className="w-[7px] h-[7px] bg-black rounded-full" />
                    </div>
                </div>

                {/* RIGHT EYE */}
                <div className="absolute top-[48px] right-[30px] z-20">
                    <div className="w-[18px] h-[22px] bg-white border-[2px] border-black rounded-full flex items-center justify-center">
                        <div className="w-[7px] h-[7px] bg-black rounded-full" />
                    </div>
                </div>

                {/* EYEBROWS */}
                <div className="absolute top-[40px] left-[27px] w-[20px] h-[3px] bg-black rounded-full rotate-[12deg] z-20" />

                <div className="absolute top-[40px] right-[27px] w-[20px] h-[3px] bg-black rounded-full rotate-[-12deg] z-20" />

                {/* SMILE */}
                <div className="absolute top-[88px] left-1/2 -translate-x-1/2 z-20">
                    <div className="w-[28px] h-[12px] border-b-[4px] border-black rounded-b-full" />
                </div>

                {/* METAL SHINE */}
                <div className="absolute top-[15px] left-[15px] w-[18px] h-[70px] bg-white/70 blur-sm rounded-full rotate-[18deg]" />

                {/* SHADOW */}
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[70px] h-[14px] bg-black/20 blur-lg rounded-full" />
            </div>

            {/* ANIMATIONS */}
            <style>
                {`
                @keyframes clippyFloat {
                    0%, 100% {
                        transform: translateY(0px) rotate(-2deg);
                    }

                    50% {
                        transform: translateY(-7px) rotate(2deg);
                    }
                }

                @keyframes clippyBubble {
                    0%, 100% {
                        transform: translateY(0px);
                    }

                    50% {
                        transform: translateY(-4px);
                    }
                }
                `}
            </style>
        </div>
    );
}