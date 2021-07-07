import React from 'react'
import data from './ArrayObjetosData.json'
import './ArrayObjetosCss.css'

const ArrayObjetos = () => {
    const mostrarData = data.map(function (misDatos){
        return (
        <div className='array' key={misDatos.id}>
            <h1>{misDatos.titulo}</h1>
            <p>{misDatos.contenido}</p>
        </div>
        )
    });
    return mostrarData;
}

export default ArrayObjetos
