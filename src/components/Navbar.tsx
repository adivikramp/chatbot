import { TbMessageChatbotFilled } from "react-icons/tb";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { signOutAction } from "@/lib/actions";
import dynamic from "next/dynamic";

const MobileNav = dynamic(() => import("./MobileNav"));

const Navbar = async () => {
    const session = await auth();

    return (
        <div className="fixed top-0 left-0 w-full bg-black flex justify-between items-center h-20 md:h-24 px-4 text-white z-20">
            <div className="w-full md:w-4/5 flex justify-between items-center mx-auto">
                {/* Logo */}
                <Link href="/">
                    <TbMessageChatbotFilled className="text-white h-12 w-12 cursor-pointer" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex">
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

                {/* Mobile Navigation Component */}
                <MobileNav session={session} signOutAction={signOutAction} />
            </div>
        </div>
    );
};

export default Navbar;
