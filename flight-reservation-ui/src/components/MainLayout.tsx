import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-[#f7fafd] text-[#181c1e]">
            {/* HEADER */}
            <header className="h-16 flex items-center px-6 border-b bg-white">
                <span className="font-bold">SKYNAV</span>
            </header>

            {/* PAGE CONTENT */}
            <main className="pt-6 px-4">
                <Outlet />
            </main>
        </div>
    );
}