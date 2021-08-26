import React from "react";

import '../assets/styles/components/Login.scss'

import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'



const Login = () => (
  <section clasName="login">
    <section clasName="login__container">
      <h2>Inicia sesión</h2>
      <form clasName="login__container--form">
        <input clasName="input" type="text" placeholder="Correo" />
        <input clasName="input" type="password" placeholder="Contraseña" />
        <button clasName="button">Iniciar sesión</button>
        <div clasName="login__container--remember-me">
          <label>
            <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
          </label>
          <a href="/">Olvidé mi contraseña</a>
        </div>
      </form>
      <section clasName="login__container--social-media">
        <div><img src= { googleIcon } /> Inicia sesión con Google</div>
        <div><img src={ twitterIcon } /> Inicia sesión con Twitter</div>
      </section>
      <p clasName="login__container--register">No tienes ninguna cuenta <a href="">Regístrate</a></p>
    </section>
  </section>
)

export default Login