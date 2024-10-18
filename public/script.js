document.getElementById('send-button').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    addMessageToChat("You: " + userInput);
    document.getElementById('user-input').value = ""; // очистить поле ввода

    // Отправка запроса на сервер
    const response = await fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();
    addMessageToChat("ChatGPT: " + data.reply);
});

function addMessageToChat(message) {
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Прокрутка чата вниз
}
