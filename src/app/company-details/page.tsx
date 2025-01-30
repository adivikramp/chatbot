"use client";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { TbMessageChatbotFilled } from "react-icons/tb";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

const CompanyDetails = () => {
    const router = useRouter()

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        router.push('/scraping')
    }

    return (
        <section className="min-h-screen bg-black flex flex-col justify-center items-center">
            <div className="mx-auto h-[540px] w-[360px] md:w-[720px] flex flex-col rounded-2xl py-6 px-10" style={{ boxShadow: '0 4px 28px rgba(255, 255, 255, 0.4)' }}>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <TbMessageChatbotFilled className="text-white h-12 w-12" />
                            <h1 className="text-white font-bold text-3xl mx-4">Enter Company details</h1>
                        </div>
                        <div className="grid grid-cols-1 w-full items-center gap-y-4 my-6">
                            <Label className="text-gray-400 text-sm" htmlFor="companyName">Company Name</Label>
                            <Input className="border-gray-800 text-white py-2" type="name" id="companyName" placeholder="Company's Name" required />
                            <Label className="text-gray-400 text-sm" htmlFor="companyUrl">Company URL</Label>
                            <Input className="border-gray-800 text-white py-2" type="email" id="companyUrl" placeholder="name@work-email.com" required />
                            <Label className="text-gray-400 text-sm" htmlFor="companyDescription">Company Description</Label>
                            <Textarea className="border-gray-800 text-white py-2 resize-none md:h-32" id="companyDescription" placeholder="Company's Description" required />
                        </div>
                        <Button variant="outline" className="py-6 md:py-4 rounded-xl">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </section >
    )
}

export default CompanyDetails