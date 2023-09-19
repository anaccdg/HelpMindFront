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
            <h1 className="apelido">Apelido</h1>
            <div className="user_chat"></div>
            <div className="text_box" contentEditable="true">
                Insira o texto aqui...
                <button className="send_button"></button>
            </div>
        </div>
    </div>
  );
}

export default Conversation;
