import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import LanguageContext from '../../context/LanguageContext';
import ThemeContext from '../../context/ThemeContext';

function HeaderContext() {

  const {theme, handleTheme} = useContext(ThemeContext);
  const {text, handleLanguage} = useContext(LanguageContext);
  const {auth, handleAuth} = useContext(AuthContext);
  
  return (
    <div className={theme}>
            <header >
                <h2>{text.headerTitle}</h2>
                <h3>{text.headerSubtitle}</h3>
                <select name="language" id="" onChange={handleLanguage}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
                <br />
                <br />
                <input type="radio" name="theme" id="light-context" value="light" onClick={handleTheme} />
                <label htmlFor="light">{text.headerLight}</label>
                <input type="radio" name="theme" id="dark-context" value="dark" onClick={handleTheme}/>
                <label htmlFor="dark">{text.headerDark}</label>
                <br />
                <button onClick={handleAuth}>{auth ? text.buttonLogout : text.buttonLogin}</button>
            </header>
    </div>
  )
}

export default HeaderContext;