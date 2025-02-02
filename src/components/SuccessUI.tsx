import { motion } from 'motion/react'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const SuccessUI = () => {
    const router = useRouter()

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full text-center mt-6"
        >
            <h2 className="text-white text-lg md:text-2xl font-semibold mb-4">🎉 Integration Successful!</h2>
            <Button onClick={() => router.push("/admin-panel")} className="w-full py-4 rounded-xl mb-4">
                🎛️ Go to Admin Panel
            </Button>
            <Button onClick={() => router.push("/chatbot")} className="w-full py-4 rounded-xl mb-4">
                💬 Start Chatting
            </Button>
            <div className="flex justify-center space-x-4 mt-4">
                <FacebookShareButton url="https://your-website.com" title="I just integrated an awesome chatbot!">
                    <FaFacebook className="text-blue-600 h-8 w-8" />
                </FacebookShareButton>
                <TwitterShareButton url="https://your-website.com" title="I just integrated an awesome chatbot!">
                    <FaTwitter className="text-blue-400 h-8 w-8" />
                </TwitterShareButton>
                <LinkedinShareButton url="https://your-website.com" title="Chatbot Integration" summary="I just integrated an awesome chatbot!">
                    <FaLinkedin className="text-blue-800 h-8 w-8" />
                </LinkedinShareButton>
            </div>
        </motion.div>
    )
};
export default SuccessUI;