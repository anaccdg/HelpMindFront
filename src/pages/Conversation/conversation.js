import './conversation.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../images/logo.png";

function Conversation() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const apelido = searchParams.get('apelido');

  return (
    <div>
        <div className="background"></div>
        <div className="header">
            <div className="img_usuario"></div>
            <Link to="/Questionario" className="back_button"></Link>
            <div className="img_logo"></div>
            <h1 className="apelido">{apelido}</h1>
            <div className="user_chat"></div>
            <textarea className = 'text_box' placeholder="Digite aqui sua mensagem"></textarea>
            <button className="send_button"></button>
        </div>
    </div>
  );
}

export default Conversation;
