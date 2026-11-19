
async function sendMessage() {

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    // Display user's message
    const userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.textContent = message;
    chatBox.appendChild(userDiv);

    input.value = "";

    // Send message to Flask backend
    const response = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    });

    const data = await response.json();

    // Display AI response
    const botDiv = document.createElement("div");
    botDiv.className = "bot-message";
    botDiv.textContent = data.response;
    chatBox.appendChild(botDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}
