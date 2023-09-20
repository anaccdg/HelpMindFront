// Importe useState
import React, { useState } from 'react';
import './conversation.css';
import { Link, useLocation } from 'react-router-dom';

function Conversation() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const apelido = searchParams.get('apelido');

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  const simulateReceivedMessage = () => {
    const receivedMessage = "Claro! O que você está sentindo?";
    setMessages([...messages, { text: receivedMessage, sender: 'received' }]);
  };

  return (
    <div>
      <div className="background">
        <div className="header">
          <div className="img_usuario"></div>
          <Link to="/Questionario" className="back_button"></Link>
          <div className="img_logo"></div>
          <h1 className="apelido">{apelido}</h1>
          <div className="user_chat"></div>
        </div>
        <div className="body-container">
          <div className="message-container">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
        </div>
        <div className="input-container">
          <textarea
            className="text_box"
            placeholder="Digite aqui sua mensagem"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="send_button" onClick={handleSendMessage}>
            
          </button>
          <button className="simulate_button" onClick={simulateReceivedMessage}>
            Simular Recebida
          </button>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
