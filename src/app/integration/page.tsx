"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";
import Confetti from "react-confetti";
import { AiOutlineClose } from "react-icons/ai";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Integration = () => {
    const [integrationStatus, setIntegrationStatus] = useState<"pending" | "success" | "failed">("pending");
    const [showIframe, setShowIframe] = useState(false);
    const [isTesting, setIsTesting] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const router = useRouter();

    const chatbotScriptURL = "/mock-chatbot.js";

    const handleTryChatbot = () => {
        const snippet = `(function() {
            const script = document.createElement("script");
            script.src = "${chatbotScriptURL}";
            script.onload = () => {
                console.log("Chatbot script injected successfully!");
            };
            script.onerror = () => {
                console.error("Failed to inject chatbot script.");
            };
            document.head.appendChild(script);
        })();`;

        navigator.clipboard.writeText(snippet)
            .then(() => {
                toast.success("✅ JavaScript snippet copied! Paste it in your browser console to test the chatbot.");
            })
            .catch(() => {
                toast.error("❌ Failed to copy snippet. Please copy it manually.");
            });
    };

    const handleTestChatbot = () => {
        setShowIframe(true);

        setTimeout(() => {
            if (iframeRef.current) {
                const iframe = iframeRef.current;
                const iframeDocument = iframe.contentDocument;

                if (iframeDocument) {
                    const script = iframeDocument.createElement("script");
                    script.src = chatbotScriptURL;
                    script.onload = () => console.log("✅ Chatbot script injected successfully!");
                    script.onerror = () => console.error("❌ Failed to inject chatbot script.");
                    iframeDocument.head.appendChild(script);
                }
            }
        }, 1000);
    };

    const handleIntegrateOnWebsite = () => {
        const dummyCode = `<script src="${chatbotScriptURL}"></script>`;
        const mailToLink = `mailto:developer@client.com?subject=Chatbot Integration Instructions&body=Please integrate the chatbot by adding the following code inside the <head> of your website:%0A%0A${encodeURIComponent(dummyCode)}`;

        toast.info(
            <div>
                <p>🔧 Integration Options:</p>
                <Button onClick={() => navigator.clipboard.writeText(dummyCode)} className="mt-2">
                    📋 Copy Code
                </Button>
                <Button onClick={() => window.location.href = mailToLink} className="mt-2 ml-2">
                    ✉️ Email to Developer
                </Button>
            </div>,
            { autoClose: false }
        );
    };

    const handleTestIntegration = () => {
        setIsTesting(true);
        toast.info("🔍 Testing chatbot integration...");
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5; // Random success/failure simulation
            if (isSuccess) {
                setIntegrationStatus("success");
                setShowConfetti(true);
                toast.success("🎉 Chatbot successfully integrated!");
            } else {
                setIntegrationStatus("failed");
                toast.error("❌ Integration not detected. Please check your setup.");
            }
            setIsTesting(false);
        }, 2000);
    };

    useEffect(() => {
        if (showConfetti) {
            const timer = setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
            return () => clearTimeout(timer);
        }
    }, [showConfetti]);

    const SuccessUI = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full text-center mt-6"
        >
            <h2 className="text-white text-2xl font-semibold mb-4">🎉 Integration Successful!</h2>
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
    );

    const FailedUI = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full text-center mt-6"
        >
            <h2 className="text-white text-2xl font-semibold mb-4">⚠️ Integration Not Detected</h2>
            <p className="text-gray-400 mb-4">Ensure the chatbot script is correctly embedded.</p>
            <Button onClick={handleTestIntegration} className="w-full py-4 rounded-xl mb-4">
                🔄 Retry Test
            </Button>
            <a href="https://docs.your-website.com/integration-guide" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                📖 View Integration Guide
            </a>
        </motion.div>
    );

    return (
        <section className="min-h-screen bg-black flex flex-col justify-center items-center pt-32 pb-4 px-6">
            <div className="w-full max-w-xl md:max-w-4xl bg-gray-900 rounded-2xl py-8 px-10 shadow-lg">
                <div className="flex flex-col items-center">
                    <TbMessageChatbotFilled className="text-white h-14 w-14" />
                    <h1 className="text-white font-bold text-3xl mt-4 mb-2">Chatbot Integration</h1>
                    <p className="text-gray-400 text-center mb-6">
                        Easily integrate our AI-powered chatbot on your website and enhance user engagement.
                    </p>

                    <Button onClick={handleTryChatbot} className="w-full py-4 rounded-lg mb-4">
                        🚀 Try Chatbot on Your Website
                    </Button>

                    <Button onClick={handleTestChatbot} className="w-full py-4 rounded-lg mb-4">
                        🛠️ Test Chatbot in a Sandbox
                    </Button>

                    <Button onClick={handleIntegrateOnWebsite} className="w-full py-4 rounded-lg mb-4">
                        📌 Get Integration Code
                    </Button>

                    <Button onClick={handleTestIntegration} className="w-full py-4 rounded-lg mb-4" disabled={isTesting}>
                        {isTesting ? "🔍 Testing..." : "🔎 Test Integration"}
                    </Button>

                    {/* Integration Status */}
                    {integrationStatus === "success" && <SuccessUI />}
                    {integrationStatus === "failed" && <FailedUI />}
                </div>
            </div>

            {/* IFrame for Testing */}
            {showIframe && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed top-28 left-4/5 transform -translate-x-1/2 w-[90%] max-w-8xl h-[80vh] bg-gray-800 border border-white shadow-2xl rounded-lg overflow-hidden"
                >
                    <div className="flex justify-between items-center bg-gray-900 p-3">
                        <h3 className="text-white text-lg font-semibold">Chatbot Sandbox</h3>
                        <button onClick={() => setShowIframe(false)} className="text-white hover:text-red-500 text-2xl">
                            <AiOutlineClose />
                        </button>
                    </div>
                    <iframe
                        ref={iframeRef}
                        src={`/api/proxy?url=${encodeURIComponent("https://huly-clone-seven.vercel.app")}`}
                        className="w-full h-full"
                        style={{ minHeight: "400px" }}
                    />
                </motion.div>
            )}

            {/* Confetti Animation */}
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} recycle={false} />}

            <ToastContainer />
        </section>
    );
};

export default Integration;