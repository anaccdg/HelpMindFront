import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'

function RoutesApp(){
    return(
        <BrowserRouter>        
            <Header/>       
            <Routes>
                
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;