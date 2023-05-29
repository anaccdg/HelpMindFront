import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Conversation from './pages/Conversation'
import Home from './pages/Home'
import Erro from './pages/Erro'
import Form from './pages/Form'
import Header from './components/Header'

function RoutesApp(){
    return(
        <BrowserRouter>        
            <Routes>
                <Route path='/' element={ <Home/>}/>
                <Route path='/Formulario' element={ <Form/>}/>
                <Route path='/Chat' element={ <Conversation/>}/>    
                <Route path='*' element={ <Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;