'use client';
import { useState, useRef, useEffect } from 'react';

export default function HomePage() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Selamat datang ke GangNiaga Executive OS. Sila tekan "Initialize Memory" di panel sebelah kiri untuk memuatkan data percubaan, kemudian tanyakan soalan anda.' }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [toast, setToast] = useState({ message: '', isError: false, show: false });
  const [isSeeding, setIsSeeding] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const showToast = (message: string, isError = false) => {
    setToast({ message, isError, show: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  const handleSeed = async () => {
    setIsSeeding(true);
    try {
      const response = await fetch('/api/seed', { method: 'POST' });
      const data = await response.json();
      if (response.ok) {
        showToast("Memory successfully initialized!");
      } else {
        showToast(data.error || "Failed to initialize memory", true);
      }
    } catch (e) {
      showToast("Network error. Is the server running?", true);
    } finally {
      setIsSeeding(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isThinking) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsThinking(true);

    try {
      const response = await fetch('/api/knowledge/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userMsg })
      });
      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { role: 'ai', content: data.answer }]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', content: "Maaf, terdapat ralat teknikal: " + (data.error || "Unknown error") }]);
        showToast("API Error", true);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: "Ralat rangkaian. Sila pastikan server beroperasi." }]);
      showToast("Network Error", true);
    } finally {
      setIsThinking(false);
    }
  };

  const renderContent = (content: string) => {
    let formatted = content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
      
    const parts = formatted.split(/(\*\*.*?\*\*)/g);
    
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part.split('\n').map((line, j) => (
        <span key={j}>{line}{j !== part.split('\n').length - 1 && <br />}</span>
      ))}</span>;
    });
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar glass-panel">
        <div className="sidebar-header">
          <div className="logo">
            <span className="glow-text">GN</span>
          </div>
          <h2>Executive OS</h2>
        </div>
        
        <div className="sidebar-menu">
          <div className="menu-section">
            <h3>SYSTEM STATUS</h3>
            <div className="status-indicator">
              <span className="dot active"></span>
              <span>Engine: Online</span>
            </div>
            <div className="status-indicator">
              <span className="dot active"></span>
              <span>Memory: Local (VectorStore)</span>
            </div>
          </div>

          <div className="menu-section">
            <h3>ACTIONS</h3>
            <button id="seed-btn" className="primary-btn" onClick={handleSeed} disabled={isSeeding}>
              <span>{isSeeding ? "Initializing..." : "Initialize Memory"}</span>
              <div className="btn-glow"></div>
            </button>
            <p className="help-text">Loads standard company knowledge into the vector database.</p>
          </div>
        </div>

        <div className="sidebar-footer">
          <p>v2.0.0 Bounded Pilot</p>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="chat-container">
        <header className="chat-header glass-panel">
          <div className="header-content">
            <h1>Executive Intelligence Core</h1>
            <p>Ask anything about the company's internal documents, policies, or status.</p>
          </div>
        </header>

        <div id="chat-messages" className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role === 'user' ? 'user-message' : 'ai-message'}`}>
              <div className={`avatar ${msg.role === 'user' ? 'user-avatar' : 'ai-avatar'}`}>
                {msg.role === 'user' ? 'ME' : 'GN'}
              </div>
              <div className="message-bubble">
                <p>{renderContent(msg.content)}</p>
              </div>
            </div>
          ))}
          
          {isThinking && (
            <div className="message ai-message typing-msg" id="typing-indicator">
              <div className="avatar ai-avatar">GN</div>
              <div className="message-bubble">
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="input-area glass-panel">
          <form id="chat-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              id="chat-input" 
              placeholder="Tanya soalan eksekutif..." 
              autoComplete="off" 
              required 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" id="send-btn" className="send-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </main>
      
      {/* Toast Notification */}
      <div id="toast" className={`toast ${toast.isError ? 'error' : ''} ${toast.show ? 'show' : 'hidden'}`}>
        {toast.message}
      </div>
    </div>
  );
}
