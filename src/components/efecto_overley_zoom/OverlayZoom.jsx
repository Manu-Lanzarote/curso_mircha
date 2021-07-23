import React from 'react'
import './OverlayCss.css'
import img1 from '../../imagenes/gota1.jpg'
import img2 from '../../imagenes/gota2.jpg'

export const OverleyZoom = () => {
    return (
        <div className="container5">
            <div className="box">
                <img src={img1} alt='Imagen 1'/>
                <div className="capa">
                    <h2>TEXTO1</h2>
                </div>
            </div>
            <div className="box">
                <img src={img2} alt='Imagen 1'/>
                <div className="capa">
                    <h2>TEXTO1</h2>
                </div>
            </div>
        </div>
    )
}
