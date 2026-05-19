// AVAILABLE PAGE

import { Link } from "react-router-dom";

export default function Available() {
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
                            className="text-[#000f22] border-b-2 border-cyan-500 pb-1"
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

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">

                <div className="mb-12">
                    <p className="uppercase tracking-widest text-cyan-600 text-sm font-bold">
                        Exclusive Deals
                    </p>

                    <h1 className="text-5xl font-black text-[#000f22] mt-2">
                        Available Flights
                    </h1>

                    <p className="text-gray-500 mt-4 max-w-2xl">
                        Discover premium destinations with real-time
                        pricing and AI-powered recommendations.
                    </p>
                </div>

                {/* DEALS */}
                <div className="grid md:grid-cols-3 gap-8">
                    <Deal
                        city="Tokyo"
                        country="Japan"
                        price="$699"
                        image="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1971&auto=format&fit=crop"
                    />

                    <Deal
                        city="Paris"
                        country="France"
                        price="$499"
                        image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1973&auto=format&fit=crop"
                    />

                    <Deal
                        city="Dubai"
                        country="UAE"
                        price="$799"
                        image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1974&auto=format&fit=crop"
                    />
                </div>
            </div>
        </div>
    );
}

function Deal({ city, country, price, image }: any) {
    return (
        <div className="relative h-[450px] rounded-3xl overflow-hidden group shadow-xl">

            <img
                src={image}
                alt={city}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-cyan-300 font-semibold">
                    From {price}
                </p>

                <h2 className="text-4xl font-black mt-2">
                    {city}
                </h2>

                <p className="text-gray-300 text-lg">
                    {country}
                </p>

                <button className="mt-6 bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl font-bold shadow-lg">
                    Book Now
                </button>
            </div>
        </div>
    );
}