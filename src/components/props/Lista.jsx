import React from 'react'

import './ListaCss.css'

const Lista = (props) => {
    console.log(props)
    return (
        <div className='contenedores'>
            <img alt={props.alt}>{props.image}</img>
            <h5>{props.titulo}</h5>
            <p>{props.contenido}</p>
        </div>
    )
}


export default Lista
