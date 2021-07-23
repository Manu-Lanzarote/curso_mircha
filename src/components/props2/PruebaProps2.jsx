import React from 'react'

const PruebaProps2 = (props) => {
    return (
        <div>
            <h1>{props.titulo}</h1>
            <p style={{ whiteSpace: "pre-line" }}>{props.contenido}</p>;
        </div>
    )
}

export default PruebaProps2
