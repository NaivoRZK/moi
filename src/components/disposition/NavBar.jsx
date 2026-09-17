import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const links = [
        { to: '/', label: 'Accueil' },
        { to: '/projets', label: 'Projets' },
        { to: '/experiences', label: 'Expériences' },
        { to: '/contacts', label: 'Contact' },
    ];

    return (
        <nav className="bg-[#F9FAFB] fixed w-full z-20 top-0 start-0 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3">
                    <span className="self-center text-xl font-semibold text-[#222222] whitespace-nowrap">
                        Andry.
                    </span>
                </Link>

                {/* Hamburger button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    aria-controls="navbar-solid"
                    aria-expanded={menuOpen}
                >
                    <span className="sr-only">Ouvrir le menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                    </svg>
                </button>

                {/* Menu */}
                <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-solid">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-200 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                        {links.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    onClick={() => setMenuOpen(false)}
                                    className={`block py-2 px-3 rounded-lg md:p-0 transition-colors ${
                                        location.pathname === link.to
                                            ? 'text-[#4A6FA5] bg-blue-50 md:bg-transparent md:text-[#4A6FA5]'
                                            : 'text-[#333333] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#4A6FA5]'
                                    }`}
                                    aria-current={location.pathname === link.to ? 'page' : undefined}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
