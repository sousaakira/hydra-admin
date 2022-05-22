import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Menu.css'
function MenuComponet(){
    return(
        <div>
            <Link className='NavMenu' to="/">Inicio</Link>
            <Link className='NavMenu' to="/login">Componentes</Link>
        </div>   
    )
}

export default MenuComponet