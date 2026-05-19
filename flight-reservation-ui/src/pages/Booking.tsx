// BOOKING PAGE

import { Link } from "react-router-dom";

export default function Booking() {
    return (
        <div className="bg-[#f7fafd] min-h-screen text-[#181c1e]">
            {/* TOP NAVBAR */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                    {/* LOGO */}
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#000f22] flex items-center justify-center text-white">
                            ✈
                        </div>

                        <Link
                            to="/"
                            className="font-black text-xl tracking-tight text-[#000f22]"
                        >
                            SKYNAV
                        </Link>
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
            <div className="max-w-5xl mx-auto px-6 pt-32 pb-16">

                <div className="mb-10">
                    <p className="uppercase tracking-widest text-cyan-600 text-sm font-bold">
                        Booking Details
                    </p>

                    <h1 className="text-5xl font-black text-[#000f22] mt-2">
                        Your Flight Booking
                    </h1>
                </div>

                {/* BOOKING CARD */}
                <div className="bg-white rounded-3xl shadow-2xl border overflow-hidden">

                    {/* TOP SECTION */}
                    <div className="bg-[#000f22] text-white p-10">
                        <p className="text-cyan-300 uppercase text-sm tracking-widest">
                            Flight Route
                        </p>

                        <h2 className="text-5xl font-black mt-2">
                            LHR → JFK
                        </h2>

                        <p className="text-gray-300 mt-4">
                            British Airways • Economy Class
                        </p>
                    </div>

                    {/* DETAILS */}
                    <div className="p-10">

                        <div className="grid md:grid-cols-2 gap-6">
                            <Info
                                label="Passenger"
                                value="John Doe"
                            />

                            <Info
                                label="Seat Class"
                                value="Economy"
                            />

                            <Info
                                label="Price"
                                value="$420"
                            />

                            <Info
                                label="Date"
                                value="Oct 24, 2025"
                            />

                            <Info
                                label="Departure"
                                value="08:30 AM"
                            />

                            <Info
                                label="Gate"
                                value="B12"
                            />
                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-wrap gap-4 mt-10">
                            <button className="bg-cyan-500 hover:bg-cyan-400 transition text-white px-8 py-4 rounded-2xl font-bold shadow-lg">
                                Confirm Booking
                            </button>

                            <Link
                                to="/flights"
                                className="bg-gray-100 hover:bg-gray-200 transition px-8 py-4 rounded-2xl font-bold text-[#000f22]"
                            >
                                Back to Flights
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Info({ label, value }: any) {
    return (
        <div className="border rounded-2xl p-5 hover:border-cyan-400 transition">
            <p className="text-xs uppercase text-gray-400 font-bold">
                {label}
            </p>

            <p className="text-2xl font-black text-[#000f22] mt-2">
                {value}
            </p>
        </div>
    );
}