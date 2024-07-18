document.addEventListener('DOMContentLoaded', () => {
    const convHistory = [];

    const form = document.getElementById('form');
    const userInput = document.getElementById('user-input');
    const chatbotConversation = document.getElementById('chatbot-conversation-container');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            progressConversation();
        });
    } else {
        console.error('Form element not found');
    }

    async function progressConversation() {
        const question = userInput.value;
        userInput.value = '';
        const newHumanSpeechBubble = document.createElement('div');
        newHumanSpeechBubble.classList.add('speech', 'speech-human');
        chatbotConversation.appendChild(newHumanSpeechBubble);
        newHumanSpeechBubble.textContent = question;
        chatbotConversation.scrollTop = chatbotConversation.scrollHeight;

        try {
            const response = await fetch('/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question, conv_history: convHistory })
            }).then(res => res.json());

            convHistory.push(question);
            convHistory.push(response.answer);

            const newAiSpeechBubble = document.createElement('div');
            newAiSpeechBubble.classList.add('speech', 'speech-ai');
            chatbotConversation.appendChild(newAiSpeechBubble);
            newAiSpeechBubble.textContent = response.answer;
            chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    }
});
