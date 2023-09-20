import React, { useState } from 'react';
import './conversation.css';
import { Link, useLocation } from 'react-router-dom';
import dog1 from "../../images/form/dog1.png";
import dog2 from "../../images/form/dog2.png";
import dog3 from "../../images/form/dog3.png";
import cat1 from "../../images/form/cat1.png";
import cat2 from "../../images/form/cat2.png";
import cat3 from "../../images/form/cat3.png";

function Conversation() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const apelido = searchParams.get('apelido');
  let avatar = searchParams.get('avatar');

  if (avatar === "dog1"){
    avatar = dog1;
  } else if (avatar === "dog2"){
    avatar = dog2;
  } else if (avatar === "dog3"){
    avatar = dog3;
  } else if (avatar === "cat1"){
    avatar = cat1;
  } else if (avatar === "cat2"){
    avatar = cat2;
  } else if (avatar === "cat3"){
    avatar = cat3;
  }

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [mensagemFinal, setNewMessageFinal] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  const ultimaMensagem = (mensagem) => {
    setNewMessageFinal(mensagem)
  };

  const simulateReceivedMessage = () => {
    const receivedMessage = '';
  
    const requestOptions = {
      method: 'POST', 
      mode: 'cors',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mensagemUsuario: mensagemFinal
      })
    };
  
    fetch('http://127.0.0.1:5000/api/conversation_chat', requestOptions)
      .then(response => {
        if (response.ok) {        
          const contentType = response.headers.get('content-type');
          
          if (contentType && contentType.includes('application/json')) {            
            return response.json();
          } else {            
            return response.text();
          }
        } else {
          console.error('Erro ao enviar os dados para a API');
          return null;
        }
      })
      .then(data => {        
        setMessages([...messages, { text: data, sender: 'received' }]);
      })
      .catch(error => {
        console.error('Erro ao fazer a chamada da API', error);
      });
  };

  return (
    <div>
      <div className="background">
        <div className="header">
        <div className="img_usuario"><img src={avatar} className="avatar-image" /></div>
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
            onChange={(e) => {
              setNewMessage(e.target.value);
              ultimaMensagem(e.target.value);
            }}
          />
          <button className="send_button" onClick={handleSendMessage}></button>
          <button className="simulate_button" onClick={simulateReceivedMessage}>
            Simular Recebida
          </button>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
