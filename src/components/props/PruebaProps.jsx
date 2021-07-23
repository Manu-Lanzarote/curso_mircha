import React from 'react'

//Importo data
import data from '../ejemplo_array_de_objetos/ArrayObjetosData.json'
//Importo Lista
import Lista from './Lista'

import './ListaCss.css'

const PruebaProps = () => {
    const datos = data.map(function (dato) {
       return (
            <div key={dato.id} className='container'>
                <Lista
                imagen = {dato.image}
                alt = {dato.alt}
                titulo = {dato.titulo}
                contenido = {dato.contenido} />
            </div>
        ) 
    })
    return datos
}

export default PruebaProps