"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { TbMessageChatbotFilled } from "react-icons/tb";
import Link from "next/link";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const authItems = isLoggedIn
        ? [
            { id: 1, text: "Integrate Bot", href: "/company-details" },
            { id: 2, text: "Admin Panel", href: "/admin-panel" },
            { id: 3, text: "Chat with bot", href: "/chatbot" },
            { id: 4, text: "Logout", onClick: handleLogout },
        ]
        : [
            { id: 1, text: "Sign Up", href: "/signup" },
            { id: 2, text: "Login", onClick: handleLogin },
        ];

    return (
        <div className="fixed top-0 left-0 w-full bg-black flex justify-between items-center h-24 px-4 text-white z-20">
            {/* Logo */}
            <div className="w-full md:w-4/5 flex justify-between items-center mx-auto">
                <Link href="/">
                    <TbMessageChatbotFilled className="text-white h-12 w-12 cursor-pointer" />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex">
                    {authItems.map((item) => (
                        <li
                            key={item.id}
                            className="px-4 py-2 rounded-xl m-2 cursor-pointer duration-300 hover:bg-blue-500"
                            onClick={item.onClick}
                        >
                            {item.href ? <Link href={item.href}>{item.text}</Link> : item.text}
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className="block md:hidden">
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
                    }
                >
                    {/* Mobile Logo */}
                    <Link href="/">
                        <TbMessageChatbotFilled className="text-white h-12 w-12 m-4 cursor-pointer" />
                    </Link>

                    {/* Mobile Navigation Items */}
                    {authItems.map((item) => (
                        <li
                            key={item.id}
                            className="px-4 py-2 border-b rounded-xl duration-300 cursor-pointer hover:bg-blue-500"
                            onClick={item.onClick}
                        >
                            {item.href ? <Link href={item.href}>{item.text}</Link> : item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;