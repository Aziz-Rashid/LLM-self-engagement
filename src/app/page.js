'use client';
import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);

  const startConversation = async () => {
    if (!prompt) return;
    setLoading(true);
    setConversation([]);

    let messages = [{ role: 'user', content: prompt }];
    let botRoles = ['Bot A', 'Bot B'];

    for (let i = 0; i < 5; i++) {  // 5 turns per bot = 10 messages total
      for (let bot of botRoles) {
        let res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages })
        });

        let data = await res.json();
        let reply = { role: bot, content: data.reply };
        messages.push(reply);
        setConversation([...messages]);  // Update UI
      }
    }

    setPrompt('');
    setLoading(false);
  };

  return (
    <div className='root'>
    <div className="container">
      <h1 className='heading'>LLM self-engagement</h1>
      <div className='textAlign'>
      <textarea
        className="inputArea"
        placeholder="Enter initial prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      </div>
      <button
        className="btn"
        onClick={startConversation}
        disabled={!prompt || loading}
      >
        {loading ? 'Chatting...' : 'START'}
      </button>
      <div className="chatbox">
        {conversation.map((msg, index) => (
          <p className='text' key={index}><strong>{msg.role}:</strong> {msg.content}</p>
        ))}
      </div>
    </div>
    </div>
  );
}
