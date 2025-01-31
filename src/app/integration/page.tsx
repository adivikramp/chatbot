"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";
import Confetti from "react-confetti";

const Integration = () => {
    const [integrationStatus, setIntegrationStatus] = useState<"pending" | "success" | "failed">("pending");
    const [showIframe, setShowIframe] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const router = useRouter();

    const handleTestChatbot = () => {
        setShowIframe(true);

        setTimeout(() => {
            if (iframeRef.current) {
                const iframeCurr = iframeRef.current;
                console.log("iframe current: ", iframeCurr);
                const iframeDocument = iframeRef.current.contentDocument;
                console.log(iframeDocument);
                if (iframeDocument) {
                    // Create a script element
                    const script = iframeDocument.createElement("script");
                    script.src = "/mock-chatbot.js";
                    script.onload = () => {
                        console.log("Chatbot script injected successfully!");
                    };
                    script.onerror = () => {
                        console.error("Failed to inject chatbot script.");
                    };

                    iframeDocument.head.appendChild(script);
                }
            }
        }, 1000);
    };

    const handleIntegrateOnWebsite = () => {
        const dummyCode = `<script src="https://client-website.com/chatbot.js"></script>`;
        const mailToLink = `mailto:developer@client.com?subject=Chatbot Integration Instructions&body=Please integrate the chatbot by adding the following code within the <head> of your website: ${encodeURIComponent(dummyCode)}`;

        toast.info(
            <div>
                <p>Choose an option:</p>
                <Button onClick={() => navigator.clipboard.writeText(dummyCode)} className="mt-2">
                    Copy Code
                </Button>
                <Button onClick={() => window.location.href = mailToLink} className="mt-2 ml-2">
                    Mail to Developer
                </Button>
            </div>,
            { autoClose: false }
        );
    };

    const handleTestIntegration = () => {
        // Simulate integration test
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5; // Randomly simulate success or failure
            if (isSuccess) {
                setIntegrationStatus("success");
            } else {
                setIntegrationStatus("failed");
            }
        }, 2000);
    };

    return (
        <section className="min-h-screen bg-black flex flex-col justify-center items-center">
            <div className="mx-auto w-[360px] md:w-[720px] flex flex-col rounded-2xl py-6 px-10" style={{ boxShadow: '0 4px 28px rgba(255, 255, 255, 0.4)' }}>
                <div className="flex flex-col items-center">
                    <TbMessageChatbotFilled className="text-white h-12 w-12" />
                    <h1 className="text-white font-bold text-3xl my-4">Chatbot Integration</h1>

                    <Button onClick={handleTestChatbot} className="w-full py-6 md:py-4 rounded-xl mb-4">
                        Test Chatbot
                    </Button>

                    <Button onClick={handleIntegrateOnWebsite} className="w-full py-6 md:py-4 rounded-xl mb-4">
                        Integrate on Your Website
                    </Button>

                    <Button onClick={handleTestIntegration} className="w-full py-6 md:py-4 rounded-xl mb-4">
                        Test Integration
                    </Button>

                    {integrationStatus === "success" && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full text-center mt-6"
                        >
                            <Confetti width={window.innerWidth} height={window.innerHeight} />
                            <h2 className="text-white text-2xl font-semibold mb-4">Integration Successful!</h2>
                            <Button onClick={() => router.push("/admin-panel")} className="w-full py-4 rounded-xl mb-4">
                                Explore Admin Panel
                            </Button>
                            <Button onClick={() => router.push("/chatbot")} className="w-full py-4 rounded-xl mb-4">
                                Start Talking to Your Chatbot
                            </Button>
                            <div className="flex justify-center space-x-4">
                                <Button variant="outline" className="py-2 px-4 rounded-xl">
                                    Share on Twitter
                                </Button>
                                <Button variant="outline" className="py-2 px-4 rounded-xl">
                                    Share on LinkedIn
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {integrationStatus === "failed" && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full text-center mt-6"
                        >
                            <h2 className="text-white text-2xl font-semibold mb-4">Integration Not Detected</h2>
                            <p className="text-gray-400 mb-4">Please ensure the chatbot script is correctly integrated and try again.</p>
                            <Button onClick={handleTestIntegration} className="w-full py-4 rounded-xl">
                                Retry Test
                            </Button>
                        </motion.div>
                    )}
                </div>
            </div>
            {showIframe && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-50 left 50 w-5/6 h-[800px] mt-6 border border-white">
                    <iframe
                        ref={iframeRef}
                        src="/test-chatbot.html"
                        className="w-full h-full"
                    />
                </motion.div>
            )}
            <ToastContainer />
        </section>
    );
};

export default Integration;