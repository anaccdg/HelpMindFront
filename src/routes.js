import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Conversation from './pages/Conversation'
import Header from './components/Header'

function RoutesApp(){
    return(
        <BrowserRouter>        
            <Routes>
                <Route path='/' element={ <Home/>}/>
                
                <Route path='/' element={ <Conversation/>}/>    
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;