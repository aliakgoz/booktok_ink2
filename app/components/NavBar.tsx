"use client";

import { Home, Search, ShoppingBag } from "lucide-react";
import { clsx } from "clsx";

export const NavBar = () => {
    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
            <div className="flex items-center gap-8 px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/20">
                <NavItem icon={<Home size={24} />} active />
                <NavItem icon={<Search size={24} />} />
                <NavItem icon={<ShoppingBag size={24} />} />
            </div>
        </div>
    );
};

const NavItem = ({ icon, active = false }: { icon: React.ReactNode; active?: boolean }) => {
    return (
        <button
            className={clsx(
                "p-2 transition-colors duration-300",
                active ? "text-white" : "text-white/40 hover:text-white/80"
            )}
        >
            {icon}
        </button>
    );
};
