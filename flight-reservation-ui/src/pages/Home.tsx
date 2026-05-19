import { Link } from "react-router-dom";

export default function Home() {
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
            <section className="relative h-[700px] overflow-hidden pt-16">
                {/* BACKGROUND */}
                <img
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
                    alt="plane"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#000f22]/80 to-transparent" />

                {/* CONTENT */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                    <h1 className="text-6xl font-black text-white max-w-2xl leading-tight">
                        Fly with Precision.
                    </h1>

                    <p className="text-gray-200 mt-6 max-w-xl text-lg">
                        Search, track and book flights with real-time
                        aviation intelligence and AI-powered insights.
                    </p>

                    {/* SEARCH CARD */}
                    <div className="bg-white mt-10 rounded-3xl p-8 max-w-6xl shadow-2xl">
                        {/* TABS */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            <button className="bg-cyan-500 text-white px-5 py-2 rounded-full font-semibold">
                                One Way
                            </button>

                            <button className="bg-gray-100 px-5 py-2 rounded-full font-semibold text-gray-600">
                                Round Trip
                            </button>

                            <button className="bg-gray-100 px-5 py-2 rounded-full font-semibold text-gray-600">
                                Multi-City
                            </button>
                        </div>

                        {/* INPUTS */}
                        <div className="grid md:grid-cols-4 gap-4">
                            <SearchBox
                                title="Origin"
                                value="LHR"
                                subtitle="London"
                            />

                            <SearchBox
                                title="Destination"
                                value="JFK"
                                subtitle="New York"
                            />

                            <SearchBox
                                title="Departure"
                                value="Oct 24"
                                subtitle="2025"
                            />

                            <SearchBox
                                title="Passengers"
                                value="1 Adult"
                                subtitle="Economy"
                            />
                        </div>

                        {/* BUTTON */}
                        <div className="flex justify-end mt-6">
                            <Link
                                to="/flights"
                                className="bg-cyan-500 hover:bg-cyan-400 transition text-white px-10 py-4 rounded-xl font-bold shadow-lg"
                            >
                                Search Flights →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRENDING DESTINATIONS */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="mb-10">
                    <p className="uppercase tracking-widest text-cyan-600 text-sm font-bold">
                        Fast Discovery
                    </p>

                    <h2 className="text-4xl font-black text-[#000f22] mt-2">
                        Trending Destinations
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
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

                    <DestinationCard
                        city="New York"
                        country="USA"
                        price="$430"
                        image="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=1974&auto=format&fit=crop"
                    />
                </div>
            </section>

            {/* INSIGHTS */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* AI CARD */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border">
                        <div className="inline-flex bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
                            AI-Driven Insights
                        </div>

                        <h3 className="text-3xl font-black mt-6 text-[#000f22]">
                            Smart Price Trends
                        </h3>

                        <p className="text-gray-600 mt-4">
                            Our predictive engine suggests booking now.
                            Prices are expected to rise by 15% in the
                            next 72 hours.
                        </p>

                        <div className="mt-8 bg-gray-50 rounded-2xl p-6 border">
                            <p className="text-sm text-gray-500">
                                Best Price
                            </p>

                            <h4 className="text-4xl font-black mt-2">
                                $412
                            </h4>
                        </div>
                    </div>

                    {/* ECO CARD */}
                    <div className="bg-[#000f22] text-white rounded-3xl p-8 relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />

                        <div className="relative">
                            <div className="inline-flex bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold">
                                Sustainability Metrics
                            </div>

                            <h3 className="text-3xl font-black mt-6">
                                Carbon-Efficient Routes
                            </h3>

                            <p className="text-gray-300 mt-4">
                                64% of recommended flights use SAF or
                                modern aerodynamic fleets.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-10">
                                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                                    <p className="text-xs text-gray-400 uppercase">
                                        CO2 Savings
                                    </p>

                                    <h4 className="text-3xl font-black mt-2">
                                        -12.4kg
                                    </h4>
                                </div>

                                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                                    <p className="text-xs text-gray-400 uppercase">
                                        Fleet Age
                                    </p>

                                    <h4 className="text-3xl font-black mt-2">
                                        3.2 Yrs
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAPERCLIP ASSISTANT */}
            <PaperclipAssistant />
        </div>
    );
}

/* COMPONENTS */

function SearchBox({ title, value, subtitle }: any) {
    return (
        <div className="border rounded-2xl p-4 hover:border-cyan-400 transition">
            <p className="text-xs uppercase text-gray-400 font-bold">
                {title}
            </p>

            <h3 className="text-2xl font-black text-[#000f22] mt-1">
                {value}
            </h3>

            <p className="text-sm text-gray-500">
                {subtitle}
            </p>
        </div>
    );
}

function DestinationCard({ city, country, price, image }: any) {
    return (
        <div className="relative h-[420px] rounded-3xl overflow-hidden group cursor-pointer">
            <img
                src={image}
                alt={city}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-cyan-300 font-semibold">
                    From {price}
                </p>

                <h3 className="text-3xl font-black mt-1">
                    {city}
                </h3>

                <p className="text-gray-300">
                    {country}
                </p>
            </div>
        </div>
    );
}

/* MICROSOFT CLIPPY (90s STYLE) */

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
                {/* MAIN METAL BODY */}
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

                {/* SMALL SHADOW */}
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[70px] h-[14px] bg-black/20 blur-lg rounded-full" />
            </div>

            {/* RETRO ANIMATIONS */}
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