import React from 'react'
import './CookiesCss.css'

const Cookies = () => {
    function aceptar(){
        document.getElementById('cookies').classList.remove("activo")
    }
    return (
            <>
                <div className='aviso_cookies activo' id='cookies'>
                    <div className="cookies_parrafo">Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestro sitio web. Si continúa utilizando este sitio asumiremos que está de acuerdo. </div>
                    <a className='cookies_enlace' href='https://google.com'>Saber más</a>
                    <button className='cookies_boton'
                    onClick={aceptar}>
                        De acuerdo
                    </button>
                </div>
            </>
    )
}

export default Cookies
