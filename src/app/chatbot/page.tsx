"use client";

import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: "Hello! How can I help you?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const botMessage = { text: "I'm just a simple bot! 🤖", sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black pt-12">
      <div className="w-4/5 md:max-w-4xl bg-gray-900 text-white rounded-2xl shadow-2xl flex flex-col h-[500px]">
        {/* Chat Header */}
        <div className="p-4 bg-gray-800 text-center font-bold text-lg rounded-tl-2xl rounded-tr-2xl">
          Chatbot
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`px-4 py-2 rounded-2xl max-w-[70%] break-words whitespace-pre-wrap ${msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-white"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-700 flex items-center">
          <input
            type="text"
            className="flex-1 p-2 bg-gray-800 text-white rounded-xl outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} className="ml-2 p-2 bg-blue-500 rounded-md hover:bg-blue-600">
            <AiOutlineSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
