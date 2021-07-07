import React from 'react'
import './FaztCss.css'
import fazt from './FaztDaja.json'
// console.log(fazt)

const Fazt = () => {
    return (
        <div className='fazt'>
            <h1>{fazt.titulo}</h1>
            <p>{fazt.contenido}</p>
            <span></span>
        </div>
    )
}

export default Fazt;
