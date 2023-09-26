import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import Logo from "../../images/logo.png"
import Descricao from "../../images/descricao.png"

function Home(){
        return(      
            <div className='container'>
                <img className='descricao' src={Descricao}/>                    
                <img className='logo_principal' src={Logo}/>                                                    
                <Link className='button-navegation' to='/form'>Preciso de ajuda</Link>
                <h3 className='copyright'>Copyright (c) 2023 Help Mind: Uma Abordagem Preventiva e Acessível à Saúde Mental</h3>
            </div>                      
    )
}

export default Home;