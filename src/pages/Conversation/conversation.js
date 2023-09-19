import './conversation.css';
import { Link } from 'react-router-dom'
import Logo from "../../images/logo.png";

function Conversation() {
  return (
    <div>
        <div className="background"></div>
        <div className="header">
            <div className="img_usuario"></div>
            <Link to="/Questionario" className="back_button"></Link>
            <div className="img_logo"></div>
            <h1 className="apelido">Celtinha</h1>
            <div className="user_chat"></div>
            <textarea className = 'text_box' placeholder="Digite aqui sua mensagem"></textarea>
            <button className="send_button"></button>
        </div>
    </div>
  );
}

export default Conversation;
