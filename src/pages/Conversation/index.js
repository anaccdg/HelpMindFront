import './conversation.css';
import { Link } from 'react-router-dom'
import Logo from "../../images/logo.png";
import BtnVoltar from "../../images/botao-voltar.png"
import Enviar from "../../images/mandar.png"

function Conversation() {
  return (
    <div>
        <div className="background"></div>
        <div className="header">
            <div className="img_usuario"></div>
            <Link className="back_button" src={BtnVoltar}></Link>
            <div className="img_logo" src={Logo}></div>
            <h1 className="apelido">Apelido</h1>
            <div className="user_chat"></div>
            <div className="text_box">
                <Link className="send_button" src={Enviar}></Link>
            </div>
        </div>
    </div>
  );
}

export default Conversation;
