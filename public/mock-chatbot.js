(function () {
    // Create a chatbot container
    const chatbotContainer = document.createElement("div");
    chatbotContainer.style.position = "fixed";
    chatbotContainer.style.bottom = "20px";
    chatbotContainer.style.right = "20px";
    chatbotContainer.style.width = "300px";
    chatbotContainer.style.height = "400px";
    chatbotContainer.style.backgroundColor = "#ffffff";
    chatbotContainer.style.border = "1px solid #ccc";
    chatbotContainer.style.borderRadius = "10px";
    chatbotContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    chatbotContainer.style.zIndex = "1000";

    // Add a header to the chatbot
    const header = document.createElement("div");
    header.style.padding = "10px";
    header.style.backgroundColor = "#4CAF50";
    header.style.color = "#ffffff";
    header.style.borderTopLeftRadius = "10px";
    header.style.borderTopRightRadius = "10px";
    header.innerText = "Chatbot";
    chatbotContainer.appendChild(header);

    // Add a chat area
    const chatArea = document.createElement("div");
    chatArea.style.flex = "1";
    chatArea.style.padding = "10px";
    chatArea.style.overflowY = "auto";
    chatArea.innerText = "Welcome! How can I help you today?";
    chatbotContainer.appendChild(chatArea);

    // Add an input area
    const inputArea = document.createElement("input");
    inputArea.style.width = "100%";
    inputArea.style.padding = "10px";
    inputArea.style.border = "1px solid #ccc";
    inputArea.style.borderRadius = "5px";
    inputArea.style.marginTop = "10px";
    inputArea.placeholder = "Type a message...";
    chatbotContainer.appendChild(inputArea);

    // Append the chatbot to the body
    document.body.appendChild(chatbotContainer);

    console.log("Chatbot script loaded successfully!");
})();