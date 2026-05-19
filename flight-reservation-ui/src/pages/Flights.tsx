import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getAvailableFlights } from "../api/flights";

export default function Available() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        getAvailableFlights().then(setFlights);
    }, []);

    return (
        <Layout>
            <h1 className="text-2xl font-bold">Available Flights</h1>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
                {flights.map((f: any) => (
                    <div key={f.id} className="bg-green-100 p-4 rounded">
                        {f.origin} → {f.destination}
                    </div>
                ))}
            </div>
        </Layout>
    );
}