import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Booking() {

    // BOOKINGS
    const [bookings, setBookings] = useState<any[]>([]);

    // SEARCH
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    // LOAD BOOKINGS
    useEffect(() => {

        const saved =
            JSON.parse(localStorage.getItem("bookings") || "[]");

        setBookings(saved);

    }, []);

    // FILTER BOOKINGS
    const filteredBookings = bookings.filter((booking) => {

        const matchesName =
            booking.name
                ?.toLowerCase()
                .includes(name.toLowerCase());

        const matchesEmail =
            booking.email
                ?.toLowerCase()
                .includes(email.toLowerCase());

        return matchesName && matchesEmail;
    });

    // CANCEL SINGLE BOOKING
    const handleCancelBooking = (bookingId: number) => {

        const updatedBookings =
            bookings.filter(
                (booking) =>
                    booking.bookingId !== bookingId
            );

        localStorage.setItem(
            "bookings",
            JSON.stringify(updatedBookings)
        );

        setBookings(updatedBookings);

        if (updatedBookings.length === 0) {
            navigate("/available");
        }
    };

    return (
        <div className="bg-[#f7fafd] min-h-screen text-[#181c1e]">

            {/* NAVBAR */}
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
            <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">

                {/* HEADER */}
                <div className="mb-10">

                    <p className="uppercase tracking-widest text-cyan-600 text-sm font-bold">
                        Flight Reservation
                    </p>

                    <h1 className="text-5xl font-black text-[#000f22] mt-2">
                        Manage Your Bookings
                    </h1>
                </div>

                {/* SEARCH SECTION */}
                <div className="bg-white rounded-3xl shadow-xl border p-8 mb-10">

                    <h2 className="text-3xl font-black mb-8">
                        Search Bookings
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* SEARCH NAME */}
                        <div>

                            <label className="block text-sm font-bold mb-2">
                                Search by Name
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                placeholder="John Doe"
                                className="w-full border rounded-2xl px-4 py-4 outline-none focus:border-cyan-500"
                            />
                        </div>

                        {/* SEARCH EMAIL */}
                        <div>

                            <label className="block text-sm font-bold mb-2">
                                Search by Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="john@email.com"
                                className="w-full border rounded-2xl px-4 py-4 outline-none focus:border-cyan-500"
                            />
                        </div>
                    </div>
                </div>

                {/* EMPTY */}
                {filteredBookings.length === 0 && (

                    <div className="bg-white rounded-3xl border p-20 text-center">

                        <p className="text-2xl text-gray-500 font-semibold">
                            No bookings found.
                        </p>
                    </div>
                )}

                {/* BOOKINGS GRID */}
                <div className="grid md:grid-cols-2 gap-6">

                    {filteredBookings.map((booking) => (

                        <div
                            key={booking.bookingId}
                            className="bg-white rounded-3xl shadow-lg border overflow-hidden hover:shadow-2xl transition"
                        >

                            {/* TOP */}
                            <div className="bg-[#000f22] text-white p-6">

                                <p className="text-cyan-300 uppercase text-xs tracking-widest">
                                    Flight Route
                                </p>

                                <h2 className="text-2xl font-black mt-2">
                                    {booking.origin} → {booking.destination}
                                </h2>

                                <p className="text-gray-300 mt-2 text-sm">
                                    Flight ID: {booking.id}
                                </p>
                            </div>

                            {/* DETAILS */}
                            <div className="p-6">

                                <div className="grid grid-cols-2 gap-4">

                                    <Info
                                        label="Passenger"
                                        value={booking.name}
                                    />

                                    <Info
                                        label="Class"
                                        value={booking.seatClass}
                                    />

                                    <Info
                                        label="Price"
                                        value={booking.price}
                                    />

                                    <Info
                                        label="Gate"
                                        value="B12"
                                    />
                                </div>

                                {/* EMAIL */}
                                <div className="mt-4 border rounded-2xl p-4">

                                    <p className="text-xs uppercase text-gray-400 font-bold">
                                        Email
                                    </p>

                                    <p className="font-bold text-[#000f22] mt-1 break-all">
                                        {booking.email}
                                    </p>
                                </div>

                                {/* BUTTONS */}
                                <div className="flex gap-3 mt-6">

                                    <button
                                        onClick={() =>
                                            handleCancelBooking(
                                                booking.bookingId
                                            )
                                        }
                                        className="flex-1 bg-red-500 hover:bg-red-400 transition text-white py-3 rounded-2xl font-bold"
                                    >
                                        Cancel
                                    </button>

                                    <Link
                                        to="/available"
                                        className="flex-1 bg-gray-100 hover:bg-gray-200 transition py-3 rounded-2xl font-bold text-center text-[#000f22]"
                                    >
                                        Flights
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// SMALL INFO CARD
function Info({ label, value }: any) {

    return (
        <div className="border rounded-2xl p-4">

            <p className="text-[10px] uppercase text-gray-400 font-bold">
                {label}
            </p>

            <p className="text-lg font-black text-[#000f22] mt-1">
                {value}
            </p>
        </div>
    );
}