import React, { useState } from 'react';
import './conversation.css';
import { Link, useLocation } from 'react-router-dom';
import dog1 from "../../images/form/dog1.png";
import dog2 from "../../images/form/dog2.png";
import dog3 from "../../images/form/dog3.png";
import cat1 from "../../images/form/cat1.png";
import cat2 from "../../images/form/cat2.png";
import cat3 from "../../images/form/cat3.png";
import { showMessageWarn } from '../utils/utils.js';

function Conversation() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const apelido = searchParams.get('apelido');
  let avatar = searchParams.get('avatar');

  const messageError = 'Por favor, digite uma mensagem antes de enviar';

  if (avatar === "dog1") {
    avatar = dog1;
  } else if (avatar === "dog2") {
    avatar = dog2;
  } else if (avatar === "dog3") {
    avatar = dog3;
  } else if (avatar === "cat1") {
    avatar = cat1;
  } else if (avatar === "cat2") {
    avatar = cat2;
  } else if (avatar === "cat3") {
    avatar = cat3;
  }

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [mensagemFinal, setNewMessageFinal] = useState('');
  const palavrasChave = ['quero indicação de profissional', 'recomende um especialista', 'profissionais próximos'];

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const mensagem = newMessage;
      ultimaMensagem(mensagem);
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
      simulateReceivedMessage(mensagem);
    } else {
      showMessageWarn(messageError);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const ultimaMensagem = (mensagem) => {
    setNewMessageFinal(mensagem);
  };

  const simulateReceivedMessage = (mensagem) => {
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mensagemUsuario: mensagem,
      }),
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
        const mensagemLower = mensagem.toLowerCase();
        if (palavrasChave.some(palavraChave => mensagemLower.includes(palavraChave))) {
          setMessages(prevMessages => [
            ...prevMessages,
            { text: "Claro! Clique no botão abaixo para acessar nossa lista de profissionais:", sender: 'received' },
            { text: (
              <Link to="/indication" className="indication_button small-button">
                Profissionais
              </Link>
            ), sender: 'received' }
          ]);
        } else {
          setMessages(prevMessages => [
            ...prevMessages,
            { text: data, sender: 'received' }
          ]);
        }
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
          <Link to="/" className="newConversation_button">Voltar ao Menu</Link>
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
              const inputValue = e.target.value;
              const formattedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
              setNewMessage(formattedValue);
              ultimaMensagem(formattedValue);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <div className="send_button" onClick={handleSendMessage}></div>
          <button className="simulate_button" onClick={simulateReceivedMessage}></button>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
