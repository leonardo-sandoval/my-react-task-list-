
import React from 'react'
import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import HomePage from './pages/Home';
import NosotrosPage from './pages/SobreNosotros';
import Tareapage from './pages/Tareas'
import Notfound from './pages/notfound';

import Navbar from './assets/menu'
export default function  App(){
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/*'element={<Notfound/>}/>
    <Route path='/'element={<HomePage/>}/>
    <Route path='/tareas'element={<Tareapage/>}/>
    <Route path='/SobreNosotros'element={<NosotrosPage/> }/>
    </Routes>
    </BrowserRouter>
  )
}