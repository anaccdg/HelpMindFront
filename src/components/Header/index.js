import './header.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <h1 className='mensagem'>Bom te ver por aqui!</h1>
            <Link className='logo' to='/'>Vinicius Flix</Link>            
        </header>
    )
}

export default Header;