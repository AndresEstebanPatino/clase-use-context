import React from 'react'
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

/** Estados inicializados */
const initialTheme = "light";
const initialLanguage = "es"
const initialAuth = null

/** Estados inicializados */


const translation = {
    es:{
        headerTitle: "Mi aplicación SIN context API",
        headerSubtitle: "Mi cabecera",
        headerLight: "claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar sesión",
        buttonLogout: "Cerrar sesión",
        mainWelcome: "Bienvenid@, Invitad@",
        mainHello: "Hola, Usuari@",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pié de página"
    },
    en:{
        headerTitle: "My App WITHOUT context API",
        headerSubtitle: "My header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Logout",
        mainWelcome: "Welcome, guest.",
        mainHello: "Hello, user",
        mainContent: "My main content",
        footerTitle: "My footer"
    }
}



function MyPage() {
    /** Estados */
    const [theme, setTheme] = useState(initialTheme);
    const [language, setLanguage] = useState(initialLanguage);
    const [text, setText] = useState(translation[language]);
    const [auth, setAuth] =useState(initialAuth);
    /** Estados */

    /** Evento que cambia de claro a oscuro */
    const handleTheme = (e) => {
        if(e.target.value === 'light'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
    }
    /** Evento que cambia de claro a oscuro */
    const handleLanguage = (e) => {
        if(e.target.value === "es"){
            setLanguage("es")
            setText(translation.es)
        }else{
            setLanguage("en")
            setText(translation.en)
        }
    }
    /** Evento para cambiar el lenguaje */

    /** Evento para simular inicio de sesión */
        const handleAuth = () => {
            if(auth){
                setAuth(null);
            }else{
                setAuth(true);
            }
        }
    /** Evento para simular inicio de sesión */


  return (
    <div className='my-page'>

        <Header 
        theme={theme} 
        handleTheme={handleTheme}
        text={text}
        handleLanguage={handleLanguage}
        auth={auth}
        handleAuth={handleAuth}/>

        <Main 
        theme={theme}
        text={text}
        auth={auth}/>

        <Footer 
        theme={theme}
        text={text}/>

    </div>
  )
}

export default MyPage;


