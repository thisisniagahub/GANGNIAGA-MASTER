document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const seedBtn = document.getElementById('seed-btn');
    const toast = document.getElementById('toast');

    let isThinking = false;

    // Toast Notification System
    function showToast(message, isError = false) {
        toast.textContent = message;
        toast.className = `toast ${isError ? 'error' : ''} show`;
        setTimeout(() => {
            toast.className = 'toast hidden';
        }, 3000);
    }

    // Initialize Memory (Seed)
    seedBtn.addEventListener('click', async () => {
        const originalText = seedBtn.querySelector('span').textContent;
        seedBtn.querySelector('span').textContent = "Initializing...";
        seedBtn.disabled = true;

        try {
            const response = await fetch('/api/seed', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            
            if (response.ok) {
                showToast("Memory successfully initialized!");
            } else {
                showToast(data.error || "Failed to initialize memory", true);
            }
        } catch (error) {
            showToast("Network error. Is the server running?", true);
        } finally {
            seedBtn.querySelector('span').textContent = originalText;
            seedBtn.disabled = false;
        }
    });

    // Chat functionality
    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
        
        // Simple markdown parsing for bold and line breaks
        const formattedContent = content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');

        messageDiv.innerHTML = `
            <div class="avatar ${isUser ? 'user-avatar' : 'ai-avatar'}">
                ${isUser ? 'ME' : 'GN'}
            </div>
            <div class="message-bubble">
                <p>${formattedContent}</p>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    function showTypingIndicator() {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message ai-message typing-msg';
        messageDiv.id = 'typing-indicator';
        
        messageDiv.innerHTML = `
            <div class="avatar ai-avatar">GN</div>
            <div class="message-bubble">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    function scrollToBottom() {
        chatMessages.scrollTo({
            top: chatMessages.scrollHeight,
            behavior: 'smooth'
        });
    }

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const query = chatInput.value.trim();
        if (!query || isThinking) return;

        // Add user message
        addMessage(query, true);
        chatInput.value = '';
        
        // Show typing indicator
        isThinking = true;
        showTypingIndicator();

        try {
            const response = await fetch('/api/knowledge/ask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query })
            });
            
            const data = await response.json();
            
            removeTypingIndicator();
            
            if (response.ok) {
                addMessage(data.answer);
            } else {
                addMessage("Maaf, terdapat ralat teknikal: " + (data.error || "Unknown error"));
                showToast("API Error", true);
            }
        } catch (error) {
            removeTypingIndicator();
            addMessage("Ralat rangkaian. Sila pastikan server beroperasi.");
            showToast("Network Error", true);
        } finally {
            isThinking = false;
        }
    });
});
