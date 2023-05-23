import './home.css';
import Logo from "../../images/logo.png";
// import Descricao from "../../images/descricao.png";

function Conversation() {
  return (
    <div>
        <div className="background"></div>
        <div className="header">
            <div className="img_usuario"></div>
            <div className="back_button"></div>
            <div className="img_logo"></div>
            <h1 className="apelido">Apelido</h1>
            <div className="user_chat"></div>
            <div className="text_box">
                <div className="send_button"></div>
            </div>
        </div>
    </div>
  );
}

export default Conversation;
