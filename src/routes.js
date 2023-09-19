import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Conversation from './pages/Conversation/conversation'
import Home from './pages/Home'
import Form from './pages/Form/form'
import Erro from './pages/Erro'
import Questionario from './pages/Questionario/questionario'
import Header from './components/Header'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/>}/>
                <Route path='/form' element={ <Form/>}/>
                <Route path='/Chat' element={ <Conversation/>}/>
                <Route path='*' element={ <Erro/>}/>
                <Route path='/Questionario' element={ <Questionario/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;