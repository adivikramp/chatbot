(function () {
    // Create a chatbot icon
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

    // Add an icon inside the chatbot icon (you can use an emoji or an image)
    const icon = document.createElement("span");
    icon.innerText = "💬"; // Chat bubble emoji
    icon.style.fontSize = "24px";
    chatbotIcon.appendChild(icon);

    // Create a chatbot container (initially hidden)
    const chatbotContainer = document.createElement("div");
    chatbotContainer.style.position = "fixed";
    chatbotContainer.style.bottom = "80px"; // Positioned above the icon
    chatbotContainer.style.right = "20px";
    chatbotContainer.style.width = "300px";
    chatbotContainer.style.height = "400px";
    chatbotContainer.style.backgroundColor = "#ffffff";
    chatbotContainer.style.border = "1px solid #ccc";
    chatbotContainer.style.borderRadius = "10px";
    chatbotContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    chatbotContainer.style.zIndex = "1000";
    chatbotContainer.style.display = "none"; // Initially hidden

    // Add a header to the chatbot
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

    // Function to toggle chatbot visibility
    const toggleChatbot = () => {
        if (chatbotContainer.style.display === "none") {
            chatbotContainer.style.display = "block"; // Show chatbot
        } else {
            chatbotContainer.style.display = "none"; // Hide chatbot
        }
    };

    // Add click event listener to the chatbot icon
    chatbotIcon.addEventListener("click", toggleChatbot);
    button.addEventListener("click", toggleChatbot);

    // Append the chatbot icon and container to the body
    document.body.appendChild(chatbotIcon);
    document.body.appendChild(chatbotContainer);

    console.log("Chatbot script loaded successfully!");
})();