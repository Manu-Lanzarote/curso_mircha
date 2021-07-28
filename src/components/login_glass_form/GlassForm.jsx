import './GlassFormCss.css'

function GlassForm() {
    return (
        <section className='f_formulario'>
            <div className="f_box">
                <div className="f_square"></div>
                <div className="f_square"></div>
                <div className="f_square"></div>
                <div className="f_square"></div>
                <div className="f_square"></div>
                <div className="f_container">
                    <div className="f_form">
                        <h2>Contacto</h2>
                        <form>
                            <div className="inputBox">
                                <input type='text' placeholder='Username'/>
                            </div>
                            <div className="inputBox">
                                <input type='password' placeholder='Password'/>
                            </div>
                            <div className="inputBox">
                                <input type='submit' value='Login'/>
                            </div>
                            <p className='forget'>Forgot Password? <a href='https://google.com'>Click Here</a></p>
                            <p className='forget'>Don´t have an account? <a href='https://google.com'>Sign up</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GlassForm
