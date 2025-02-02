"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";
import Confetti from "react-confetti";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import SuccessUI from "@/components/SuccessUI";
import FailureUI from "@/components/FailureUI";

const Integration = () => {
    const [integrationStatus, setIntegrationStatus] = useState<"pending" | "success" | "failed">("pending");
    const [showIframe, setShowIframe] = useState(false);
    const [isTesting, setIsTesting] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const chatbotScriptURL = "https://chatbot-integration-phi.vercel.app/mock-chatbot.js";

    const handleTestChatbot = () => {
        setShowIframe(true);

        const iframeTimeout = setTimeout(() => {
            if (iframeRef.current) {
                const iframe = iframeRef.current;
                const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;

                if (iframeDocument) {
                    const scriptTimeout = setTimeout(() => {
                        console.error("❌ Failed to inject chatbot script within the timeout.");
                    }, 8000);

                    const script = iframeDocument.createElement("script");
                    script.src = chatbotScriptURL;
                    script.onload = () => {
                        console.log("✅ Chatbot script injected successfully!");
                        clearTimeout(scriptTimeout);
                    };
                    script.onerror = () => {
                        console.error("❌ Failed to inject chatbot script.");
                        clearTimeout(scriptTimeout);
                    };
                    iframeDocument.head.appendChild(script);
                } else {
                    console.error("❌ Could not access iframe document.");
                }
            } else {
                console.error("❌ Iframe ref is not available.");
            }
        }, 1000);

        if (iframeRef.current) {
            iframeRef.current.onload = () => {
                clearTimeout(iframeTimeout);
            };

            iframeRef.current.onerror = () => {
                console.error("❌ Iframe failed to load.");
                clearTimeout(iframeTimeout);
            };
        }
    };

    const handleIntegrateOnWebsite = () => {
        const dummyCode = `
        (function () {
          const chatbotIcon = document.createElement("div");
          chatbotIcon.style.position = "fixed";
          chatbotIcon.style.bottom = "80px";
          chatbotIcon.style.right = "20px";
          chatbotIcon.style.width = "50px";
          chatbotIcon.style.height = "50px";
          chatbotIcon.style.backgroundColor = "#4CAF50";
          chatbotIcon.style.borderRadius = "50%";
          chatbotIcon.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
          chatbotIcon.style.display = "flex";
          chatbotIcon.style.justifyContent = "center";
          chatbotIcon.style.alignItems = "center";
          chatbotIcon.style.cursor = "pointer";
          chatbotIcon.style.zIndex = "1000";

          const icon = document.createElement("span");
          icon.innerText = "💬";
          icon.style.fontSize = "24px";
          chatbotIcon.appendChild(icon);

          const chatbotContainer = document.createElement("div");
          chatbotContainer.style.position = "fixed";
          chatbotContainer.style.bottom = "80px";
          chatbotContainer.style.right = "20px";
          chatbotContainer.style.width = "300px";
          chatbotContainer.style.height = "400px";
          chatbotContainer.style.backgroundColor = "#ffffff";
          chatbotContainer.style.border = "1px solid #ccc";
          chatbotContainer.style.borderRadius = "10px";
          chatbotContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
          chatbotContainer.style.zIndex = "1000";
          chatbotContainer.style.display = "none";

          const header = document.createElement("div");
          const button = document.createElement("button");
          header.style.padding = "10px";
          header.style.backgroundColor = "#4CAF50";
          header.style.color = "#ffffff";
          header.style.borderTopLeftRadius = "10px";
          header.style.borderTopRightRadius = "10px";
          header.innerText = "Chatbot";
          button.style.position = "absolute";
          button.style.top = "5px";
          button.style.right = "5px";
          button.style.width = "30px";
          button.style.height = "30px";
          button.style.background = "red";
          button.style.color = "white";
          button.style.fontSize = "20px";
          button.style.borderRadius = "50%";
          button.innerText = "X";
          chatbotContainer.appendChild(header);
          chatbotContainer.appendChild(button);

          const chatArea = document.createElement("div");
          chatArea.style.flex = "1";
          chatArea.style.padding = "10px";
          chatArea.style.overflowY = "auto";
          chatArea.innerText = "Welcome! How can I help you today?";
          chatbotContainer.appendChild(chatArea);

          const inputArea = document.createElement("input");
          inputArea.style.width = "100%";
          inputArea.style.padding = "10px";
          inputArea.style.border = "1px solid #ccc";
          inputArea.style.borderRadius = "5px";
          inputArea.style.marginTop = "10px";
          inputArea.placeholder = "Type a message...";
          chatbotContainer.appendChild(inputArea);

          const toggleChatbot = () => {
            if (chatbotContainer.style.display === "none") {
              chatbotContainer.style.display = "block";
            } else {
              chatbotContainer.style.display = "none";
            }
          };

          chatbotIcon.addEventListener("click", toggleChatbot);
          button.addEventListener("click", toggleChatbot);

          document.body.appendChild(chatbotIcon);
          document.body.appendChild(chatbotContainer);

          console.log("Chatbot script loaded successfully!");
        })();
        `;
        const mailToLink = `mailto:developer@client.com?subject=Chatbot Integration Instructions&body=Please integrate the chatbot by adding the following code inside the <head> of your website:%0A%0A${encodeURIComponent(dummyCode)}`;

        toast(
            <div className="flex flex-col items-center text-center">
                <p>🔧 Integration Options:</p>
                <div className="grid grid-cols-2">
                    <Button
                        onClick={() => {
                            navigator.clipboard.writeText(dummyCode);
                            toast.success("✅ Code copied! Go and paste it in the browser developer console.");
                        }}
                        className="mt-2"
                    >
                        Copy Code
                    </Button>
                    <Button
                        onClick={() => window.location.href = mailToLink}
                        className="mt-2 ml-2"
                    >
                        Email to Developer
                    </Button>
                </div>
            </div>,
            { autoClose: false }
        );
    };

    const handleTestIntegration = () => {
        setIsTesting(true);
        toast.info("🔍 Testing chatbot integration...");
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5;
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
            const timer = setTimeout(() => setShowConfetti(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [showConfetti]);

    return (
        <section className="min-h-screen bg-black flex flex-col justify-center items-center pt-32 pb-4 px-6">
            <div className="w-full max-w-xl md:max-w-4xl bg-gray-900 rounded-2xl py-8 px-10 shadow-lg">
                <div className="flex flex-col items-center">
                    <TbMessageChatbotFilled className="text-white h-14 w-14" />
                    <h1 className="text-white text-center font-bold text-xl md:text-3xl mt-4 mb-2">Chatbot Integration</h1>
                    <p className="text-gray-400 text-center mb-6">
                        Easily integrate our AI-powered chatbot on your website and enhance user engagement.
                    </p>

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
                    {integrationStatus === "failed" && <FailureUI handleTestIntegration={handleTestIntegration} />}
                </div>
            </div>

            {/* IFrame for Testing */}
            {showIframe && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed top-28 left-4/5 transform -translate-x-1/2 w-[90%] max-w-8xl h-[70vh] bg-gray-800 border border-white shadow-2xl rounded-lg overflow-hidden"
                >
                    <div className="flex justify-between items-center bg-gray-900 p-3">
                        <h1 className="text-white text-xs md:text-lg">Chatbot not working as intended? <Link className="underline" href="/feedback">Share feedback</Link></h1>
                        <button onClick={() => setShowIframe(false)} className="text-white hover:text-red-500 text-2xl">
                            <AiOutlineClose />
                        </button>
                    </div>
                    <iframe
                        ref={iframeRef}
                        src={`/api/proxy?url=https://huly-clone-seven.vercel.app`}
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
