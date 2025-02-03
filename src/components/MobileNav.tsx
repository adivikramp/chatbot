"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { MobileNavProps } from "@/types/types";

const MobileNav: React.FC<MobileNavProps> = ({ session, signOutAction }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {isMobile && (
                <div className="block md:hidden" onClick={() => setNavOpen(!navOpen)}>
                    {navOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            )}

            {navOpen && isMobile && (
                <div className="fixed flex flex-col md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500">
                    <Link href="/">
                        <TbMessageChatbotFilled className="text-white h-12 w-12 m-4 cursor-pointer" />
                    </Link>
                    {session ? (
                        <>
                            <Link href="/company-details" className="px-4 py-2 rounded-xl m-2 cursor-pointer duration-300 hover:bg-blue-500">Integrate Bot</Link>
                            <Link href="/chatbot" className="px-4 py-2 rounded-xl m-2 cursor-pointer duration-300 hover:bg-blue-500">Chat with Bot</Link>
                            <Link href="/admin-panel" className="px-4 py-2 rounded-xl m-2 cursor-pointer duration-300 hover:bg-blue-500">Admin Panel</Link>
                            <form
                                action={signOutAction}
                                className="px-4 py-2 rounded-xl m-2 cursor-pointer duration-300 hover:bg-blue-500"
                            >
                                <span>Logout</span>
                            </form>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="px-4 py-2 rounded-xl m-2 cursor-pointer duration-300 hover:bg-blue-500">Sign In</Link>
                            <Link href="/signup" className="px-4 py-2 rounded-xl m-2 cursor-pointer duration-300 hover:bg-blue-500">Sign Up</Link>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default MobileNav;
