import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  from: 'user' | 'bot';
  text: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    // Simulación respuesta bot
    const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ messages: [...messages, userMessage] }),
});

const data = await response.json();
const botReply: Message = {
  from: 'bot',
  text: data.reply,
};
setMessages((prev) => [...prev, botReply]);

  };

  return (
    <>
      {/* Botón flotante para abrir/cerrar */}
      <div style={floatingButtonStyle} onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* Chatbot visible si está abierto */}
      <AnimatePresence>
        {open && (
          <motion.div
            style={chatContainerStyle}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div style={chatHeaderStyle}>
              Chat 2DEV
              <button onClick={() => setOpen(false)} style={closeButtonStyle}>✖</button>
            </div>

            <div style={chatMessagesStyle}>
              {messages.length === 0 && (
                <div style={placeholderStyle}>
                  👋 ¡Hola! ¿En qué podemos ayudarte?
                </div>
              )}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    ...messageBubbleStyle,
                    alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                    backgroundColor: msg.from === 'user' ? '#0070f3' : '#f0f0f0',
                    color: msg.from === 'user' ? '#fff' : '#000',
                  }}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div style={chatInputAreaStyle}>
              <textarea
                placeholder="Escribí tu mensaje..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                style={chatInputStyle}
              />
              <button onClick={handleSend} style={chatSendButtonStyle}>Enviar</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const floatingButtonStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: 20,
  right: 20,
  backgroundColor: '#0070f3',
  color: 'white',
  borderRadius: '50%',
  width: 56,
  height: 56,
  fontSize: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  zIndex: 1000,
};

const chatContainerStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: 90,
  right: 20,
  width: 360,
  height: 480,
  backgroundColor: '#fff',
  borderRadius: 12,
  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  fontFamily: "'Inter', sans-serif",
  zIndex: 1000,
};

const chatHeaderStyle: React.CSSProperties = {
  backgroundColor: '#0070f3',
  color: '#fff',
  padding: '12px 16px',
  fontWeight: 700,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const closeButtonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: 18,
  cursor: 'pointer',
};

const chatMessagesStyle: React.CSSProperties = {
  flex: 1,
  padding: '10px 12px',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
};

const messageBubbleStyle: React.CSSProperties = {
  padding: '10px 14px',
  borderRadius: 20,
  maxWidth: '75%',
  fontSize: 14,
  whiteSpace: 'pre-wrap',
  lineHeight: 1.4,
};

const chatInputAreaStyle: React.CSSProperties = {
  padding: '10px 12px',
  borderTop: '1px solid #ddd',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
};

const chatInputStyle: React.CSSProperties = {
  resize: 'none',
  padding: 10,
  borderRadius: 8,
  border: '1px solid #ccc',
  fontSize: 14,
  fontFamily: "'Inter', sans-serif",
};

const chatSendButtonStyle: React.CSSProperties = {
  padding: '10px',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  fontWeight: 600,
  cursor: 'pointer',
};

const placeholderStyle: React.CSSProperties = {
  color: '#666',
  fontSize: 14,
  textAlign: 'center',
  padding: 10,
};
