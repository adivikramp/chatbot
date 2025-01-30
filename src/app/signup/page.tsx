import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { TbMessageChatbotFilled } from "react-icons/tb";
import Link from "next/link"

const Signup = () => {
    return (
        <section className="min-h-screen bg-black flex flex-col justify-center items-center">
            <div className="mx-auto w-[360px] md:w-[480px] flex flex-col rounded-2xl py-12 px-10" style={{ boxShadow: '0 4px 28px rgba(255, 255, 255, 0.4)' }}>
                <form>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <TbMessageChatbotFilled className="text-white h-12 w-12" />
                            <h1 className="text-white font-bold text-3xl mx-4">Sign Up</h1>
                        </div>
                        <div className="grid grid-cols-1 w-full items-center gap-y-4 my-6">
                            <Label className="text-gray-400 text-sm" htmlFor="name">Name</Label>
                            <Input className="border-gray-800 text-white py-2" type="name" id="name" placeholder="Your Name" required />
                            <Label className="text-gray-400 text-sm" htmlFor="email">Email</Label>
                            <Input className="border-gray-800 text-white py-2" type="email" id="email" placeholder="name@work-email.com" required />
                            <Label className="text-gray-400 text-sm" htmlFor="password">Password</Label>
                            <Input className="border-gray-800 text-white py-2" type="password" id="password" placeholder="Your Password" required />
                        </div>
                        <Button variant="outline" className="py-6 md:py-4 rounded-xl">
                            Login
                        </Button>
                    </div>
                </form>
            </div>
            <p className="text-gray-500 text-center mt-4">Have an account?<Link href="/" className="text-white"> Sign In</Link></p>
        </section >
    )
}

export default Signup