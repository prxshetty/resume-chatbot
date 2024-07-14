import { formatConvHistory } from "./utils/formatConvHistory.js";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log("Form submission prevented");
        await progressConversation();
    });
});

const convHistory = [];

async function progressConversation() {
    const userInput = document.getElementById('user-input');
    const chatbotConversation = document.getElementById('chatbot-conversation-container');
    const question = userInput.value;
    userInput.value = '';

    const newHumanSpeechBubble = document.createElement('div');
    newHumanSpeechBubble.classList.add('speech', 'speech-human');
    chatbotConversation.appendChild(newHumanSpeechBubble);
    newHumanSpeechBubble.textContent = question;
    chatbotConversation.scrollTop = chatbotConversation.scrollHeight;

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: question, conv_history: formatConvHistory(convHistory) }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Server error: ${errorText}`);
        }

        const result = await response.json();

        convHistory.push(question)
        convHistory.push(answer);

        const newAiSpeechBubble = document.createElement('div');
        newAiSpeechBubble.classList.add('speech', 'speech-ai');
        chatbotConversation.appendChild(newAiSpeechBubble);
        newAiSpeechBubble.textContent = result.answer;
        chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
    } catch (error) {
        console.error(`Error making request: ${error}`);
    }
}
