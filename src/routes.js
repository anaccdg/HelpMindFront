import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form/form'
import Header from './components/Header'

function RoutesApp(){
    return(
        <BrowserRouter>        
            <Routes>
                <Route path='/' element={ <Home/>}/>
                <Route path='/form' element={ <Form/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;