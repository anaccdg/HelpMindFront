import React, { useState, useRef } from 'react';
import './conversation.css';
import { Link, useLocation } from 'react-router-dom';
import dog1 from "../../images/form/dog1.png";
import dog2 from "../../images/form/dog2.png";
import dog3 from "../../images/form/dog3.png";
import cat1 from "../../images/form/cat1.png";
import cat2 from "../../images/form/cat2.png";
import cat3 from "../../images/form/cat3.png";
import { showMessageWarn } from '../Utils/utils.js';

function Conversation() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const apelido = searchParams.get('apelido');
  let avatar = searchParams.get('avatar');

  const messageError = 'Por favor, digite uma mensagem antes de enviar';

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [mensagemFinal, setNewMessageFinal] = useState('');
  const palavrasChave = [
    "me indique um profissional",
    "me indique um profissional!",
    "me indique um profissional...",
    "me indique um profissional?",
    "me indique, um profissional.",
    "me indique, um profissional!",
    "me indique, um profissional...",
    "me indique, um profissional?",
    "me indique: um profissional.",
    "me indique: um profissional!",
    "me indique: um profissional...",
    "me indique: um profissional?",
    "preciso de ajuda; me indique um profissional.",
    "na área de serviços; me indique um profissional!",
    "para resolver meu problema; me indique um profissional...",
    "quem é o melhor da cidade; me indique um profissional?",
    "preciso de indicação de um profissional",
    "por favor, me indique um bom profissional",
    "pode me recomendar um especialista?",
    "estou procurando um profissional, você conhece alguém?",
    "gostaria de saber quem é recomendado na área",
    "qual é o especialista mais indicado?",
    "preciso encontrar alguém qualificado; me indique, por favor",
    "onde posso encontrar um profissional capacitado?",
    "estou buscando por um especialista, pode me ajudar?",
    "qual é o profissional mais confiável que você conhece?",
    "procuro por um especialista; você poderia indicar alguém?",
    "me ajude a encontrar um bom profissional, por favor",
    "preciso de assistência, poderia sugerir um especialista?",
    "quero contratar alguém bom na área, você pode me indicar?",
    "em busca de um especialista competente; você pode ajudar?",
    "qual é o melhor profissional disponível?",
    "preciso de auxílio profissional; você pode indicar alguém?",
    "gostaria de encontrar um especialista, pode me dar uma recomendação?",
    "onde encontro um profissional qualificado?",
    "estou procurando por um especialista; pode me dar uma dica?",
    "sugira um profissional que seja bom no que faz, por favor",
    "quem você considera um especialista de qualidade?",
    "qual é o profissional mais recomendado para o meu problema?",
    "estou precisando de um profissional competente; pode me indicar?",
    "em busca de orientação para encontrar um especialista",
    "me recomende um profissional confiável, por gentileza",
    "preciso encontrar alguém experiente na área; me indique, por favor",
    "qual é a melhor indicação para um profissional?",
    "estou à procura de um profissional; você tem alguma sugestão?",
    "gostaria de uma recomendação de um bom especialista",
    "procuro por um profissional qualificado; poderia me indicar?",
    "me indique um especialista que seja bom no que faz, por favor",
    "quem você recomenda como um bom profissional?"
  ];
  


  const textareaRef = useRef(null);

  function handleTextareaChange() {
    const textarea = textareaRef.current;
  
    const minHeight = 84;
    const maxHeight = 150;
  
    textarea.style.height = minHeight + 'px'; 
  
    if (textarea.scrollHeight > maxHeight) {
      textarea.style.height = maxHeight + 'px';
    } else {
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }

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
    setMessages(prevMessages => [
      ...prevMessages,
      { text: "", sender: 'received', id: Date.now() } 
    ]);
  
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
          throw new Error('Erro ao enviar os dados para a API');
        }
      })
      .then(data => {
        setMessages(prevMessages => {
          let newMessages = prevMessages.filter(msg => msg.id !== prevMessages[prevMessages.length - 1].id);
  
          const mensagemLower = mensagem.toLowerCase();
          if (palavrasChave.some(palavraChave => mensagemLower.includes(palavraChave))) {
            newMessages = newMessages.concat([
              { text: "Claro! Clique no botão abaixo para acessar nossa lista de profissionais:", sender: 'received' },
              { text: (
                  <Link to="/indication" className="indication_button small-button">
                    Profissionais
                  </Link>
                ), sender: 'received' }
            ]);
          } else {
            newMessages = newMessages.concat({ text: data, sender: 'received' });
          }
  
          return newMessages;
        });
      })
      .catch(error => {
        setMessages(prevMessages => prevMessages.filter(msg => msg.id !== prevMessages[prevMessages.length - 1].id)
          .concat({ text: 'Erro ao receber dados. Tente novamente mais tarde.', sender: 'received' }));
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
                {message.text === "" ? (
                  <span className="typing-indicator">
                    {message.text}
                    <span className="dot" style={{ animationDelay: "0s" }}>.</span>
                    <span className="dot" style={{ animationDelay: "0.2s" }}>.</span>
                    <span className="dot" style={{ animationDelay: "0.4s" }}>.</span>
                  </span>
                ) : (
                  message.text
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="input-container">
          <textarea
            className="text_box"
            ref={textareaRef}
            placeholder="Digite aqui sua mensagem"
            value={newMessage}
            onChange={(e) => {
              const inputValue = e.target.value;
              const formattedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
              setNewMessage(formattedValue);
              ultimaMensagem(formattedValue);
              handleTextareaChange(e);
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
