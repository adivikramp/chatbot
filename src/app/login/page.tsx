/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { signInActionEmail, signInActionGoogle } from "@/lib/actions";

const Login = () => {
    const [errorMessage, dispatch] = useActionState(signInActionEmail, undefined);

    return (
        <section className="min-h-screen bg-black flex flex-col justify-center items-center">
            <div
                className="mx-auto w-[360px] md:w-[480px] flex flex-col rounded-2xl py-6 px-10"
                style={{ boxShadow: "0 4px 28px rgba(255, 255, 255, 0.4)" }}
            >
                <form action={dispatch}>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <TbMessageChatbotFilled className="text-white h-12 w-12" />
                            <h1 className="text-white font-bold text-3xl mx-4">Sign in</h1>
                        </div>
                        <div className="grid grid-cols-1 w-full items-center gap-y-4 my-6">
                            <Label className="text-gray-400 text-sm" htmlFor="username">
                                Username
                            </Label>
                            <Input
                                className="border-gray-800 text-white py-2"
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Your Username"
                                required
                            />
                            <Label className="text-gray-400 text-sm" htmlFor="email">
                                Email
                            </Label>
                            <Input
                                className="border-gray-800 text-white py-2"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="name@work-email.com"
                                required
                            />
                            <Label className="text-gray-400 text-sm" htmlFor="password">
                                Password
                            </Label>
                            <Input
                                className="border-gray-800 text-white py-2"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Your Password"
                                required
                            />
                        </div>
                        <LoginButton />
                    </div>
                </form>
                <div className="flex items-center mt-6">
                    <div className="flex-grow border-t border-gray-700"></div>
                    <span className="px-3 text-gray-400 text-sm">OR</span>
                    <div className="flex-grow border-t border-gray-700"></div>
                </div>
                <form action={signInActionGoogle} className="grid grid-cols-1 gap-y-6 md:gap-y-0 md:gap-2 py-4">
                    <Button variant="outline" className="py-6 md:py-4 rounded-xl">
                        <FaGoogle />
                        Sign in with Google
                    </Button>
                </form>
            </div>
            <p className="text-gray-500 text-center mt-4">
                Do not have an account?
                <Link href="/signup" className="text-white">
                    {" "}
                    Sign up
                </Link>
            </p>
        </section>
    );
};

export default Login;

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <Button variant="outline" className="py-6 md:py-4 rounded-xl" aria-disabled={pending}>
            {pending ? "Logging in..." : "Login"}
        </Button>
    );
}