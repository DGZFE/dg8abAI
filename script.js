class DGPT {
    constructor() {
        this.name = 'DGPT';
        this.creator = 'DG8AB';
    }

    respondToMessage(message) {
        return `Hello! I am ${this.name}, created by ${this.creator}. You said: ${message}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const ai = new DGPT();
    const form = document.getElementById('chat-form');
    const input = document.getElementById('message-input');
    const output = document.getElementById('chat-output');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const userMessage = input.value;
        const response = ai.respondToMessage(userMessage);
        output.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        output.innerHTML += `<p><strong>DGPT:</strong> ${response}</p>`;
        input.value = '';
    });
});
