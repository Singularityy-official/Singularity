import React, { useState } from 'react';
import './ChatWidget.css';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = `👤 ${input}`;
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setError('');

    try {
 const res = await fetch('/.netlify/functions/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: input,
    systemPrompt: `Sei un assistente per Singularity Dream, un'azienda che offre servizi digitali professionali e accessibili. Offri supporto su grafica, assistenza informatica e video editing. Rispondi sempre con tono gentile e professionale.`,
  }),
});


      if (!res.ok) throw new Error('API error');

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || 'Nessuna risposta';
      setMessages(prev => [...prev, `🤖 ${reply}`]);
    } catch (err) {
      setError('Errore di connessione. Riprova più tardi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <button
          className="chat-toggle"
          onClick={() => setIsOpen(true)}
          aria-label="Apri chat"
          title="Apri chat"
        >
          <img src="/avatar.png" alt="Apri chat" className="chat-toggle-avatar" />
        </button>
      )}

      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <h3>SingularityBot</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Chiudi chat" title="Chiudi chat">
              ✖
            </button>
          </div>
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className="chat-message">{msg}</div>
            ))}
            {error && <div className="chat-error">{error}</div>}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Fai una domanda..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              disabled={loading}
            />
            <button onClick={handleSend} disabled={loading}>
              {loading ? 'Caricamento...' : 'Invia'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
