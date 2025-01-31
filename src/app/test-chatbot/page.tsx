"use client";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

const TestChatbot = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const searchParams = useSearchParams();
    const targetUrl = searchParams.get("url"); // Get the target website URL from query params

    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.onload = () => {
                try {
                    const iframeDoc = iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;
                    if (iframeDoc) {
                        // Inject chatbot script
                        const script = iframeDoc.createElement("script");
                        script.src = "https://client-chatbot.com/integration.js"; // Replace with your chatbot script
                        script.async = true;
                        iframeDoc.body.appendChild(script);

                        // Optional: Add a floating chat button
                        const chatButton = iframeDoc.createElement("button");
                        chatButton.innerText = "💬 Chat";
                        chatButton.style.position = "fixed";
                        chatButton.style.bottom = "20px";
                        chatButton.style.right = "20px";
                        chatButton.style.padding = "10px 15px";
                        chatButton.style.backgroundColor = "#007bff";
                        chatButton.style.color = "#fff";
                        chatButton.style.border = "none";
                        chatButton.style.borderRadius = "5px";
                        chatButton.style.cursor = "pointer";
                        chatButton.onclick = () => {
                            window.open("https://client-chatbot.com/chat", "_blank");
                        };
                        iframeDoc.body.appendChild(chatButton);
                    }
                } catch (error) {
                    console.error("Error injecting chatbot:", error);
                }
            };
        }
    }, [targetUrl]);

    return (
        <div style={{ width: "100vw", height: "100vh", background: "black", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {targetUrl ? (
                <iframe
                    ref={iframeRef}
                    src={targetUrl}
                    style={{ width: "90%", height: "90%", border: "none", background: "white" }}
                />
            ) : (
                <p style={{ color: "white" }}>No website URL provided</p>
            )}
        </div>
    );
};

export default TestChatbot;
