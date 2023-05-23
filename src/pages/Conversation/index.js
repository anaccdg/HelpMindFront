import './home.css';
import { Link } from 'react-router-dom'
import Logo from "../../images/logo.png";
// import Descricao from "../../images/descricao.png";

function Conversation() {
  return (
    <div>
        <div className="background"></div>
        <div className="header">
            <div className="img_usuario"></div>
            <Link className="back_button"></Link>
            <div className="img_logo"></div>
            <h1 className="apelido">Apelido</h1>
            <div className="user_chat"></div>
            <div className="text_box">
                <Link className="send_button"></Link>
            </div>
        </div>
    </div>
  );
}

export default Conversation;
