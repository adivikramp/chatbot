import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { TbMessageChatbotFilled } from "react-icons/tb"

const Feedback = () => {
    return (
        <section className="min-h-screen bg-black flex flex-col justify-center items-center pt-12">
            <div className="mx-auto h-[480px] w-[360px] md:w-[720px] flex flex-col rounded-2xl py-6 px-10" style={{ boxShadow: '0 4px 28px rgba(255, 255, 255, 0.4)' }}>
                <form>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <TbMessageChatbotFilled className="text-white h-12 w-12" />
                            <h1 className="text-white font-bold text-lg md:text-3xl mx-4">Feedback Form</h1>
                        </div>
                        <div className="grid grid-cols-1 w-full items-center gap-y-4 my-6">
                            <Label className="text-gray-400 text-sm" htmlFor="username">User Name</Label>
                            <Input className="border-gray-800 text-white py-2" type="name" id="username" placeholder="User's Name" required />
                            <Label className="text-gray-400 text-sm" htmlFor="emailId">Email ID</Label>
                            <Input className="border-gray-800 text-white py-2" type="email" id="emailId" placeholder="xyz@abc.com" required />
                            <Label className="text-gray-400 text-sm" htmlFor="issueFaced">Issue</Label>
                            <Textarea className="border-gray-800 text-white py-2 resize-none md:h-20" id="issueFaced" placeholder="Issue Faced" required />
                        </div>
                        <Button variant="outline" className="py-6 md:py-4 rounded-xl">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Feedback