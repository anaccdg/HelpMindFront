import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './questionario.css'
import Descricao from "../../images/descricao.png"

function Questionario(){
        return(      
            <div className='container_questionario'>
                <div className='header_quest'> 
                    <h2 className='title_quest'>QUESTIONÁRIO</h2>
                    <div className="img_logo"></div>
                    <div className="img_usuario"></div>
                    <Link to="/form" className="back_button"></Link>
                </div>
                <div className='form_quest-container'> 
                <div className='lookup'>
                    <select>
                        <option value="opcao1">0 - Nunca Acontece</option>
                        <option value="opcao2">1 - Acontece uma vez no mês</option>
                        <option value="opcao3">2 - Acontece a cada 15 dias</option>
                        <option value="opcao4">3 - Acontece uma vez na semana</option>
                        <option value="opcao5">4 - Acontece mais de duas vezes na mesma semana</option>
                        <option value="opcao6">5 - Acontece o tempo todo</option>
                    </select>
                    </div>
                    <Link to="/chat" className="button_quest"></Link>
                </div>
            </div>                      
    )
}

export default Questionario;