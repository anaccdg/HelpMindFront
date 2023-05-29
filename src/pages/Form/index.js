import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './form.css'
import Logo from "../../images/logo.png"
import Descricao from "../../images/descricao.png"

function Form(){
        return(      
            <div className='header'>               
                <img className='logo' src={Logo}/>                  
                <div className='texto-descritivo'>
                    <h1>Bom te ver por aqui!</h1>
                    <h3>O primeiro passo, é preencher esse formulário:</h3>
                </div>                                
                <div className='background'>
                    <form className='formulario'>
                        <div>
                            <input classname='apelido' type='text' placeholder='Insira seu apelido' />
                        </div>
                        <div>
                            <input classname='idade' type='number' placeholder='Insira sua idade' />
                        </div>
                        <div>
                            <input classname='genero' type='text' placeholder='Insira seu gênero' />
                        </div>
                    </form>                    
                    <Link className='button-navegation' to={`/Chat`}>Continuar</Link>
                </div>                
            </div>            
    )
}

export default Form;