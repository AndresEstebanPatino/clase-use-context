import React from 'react'

function Header({theme, handleTheme, text, handleLanguage, auth, handleAuth}) {
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
                <input type="radio" name="theme" id="light" value="light" onClick={handleTheme} />
                <label htmlFor="light">{text.headerLight}</label>
                <input type="radio" name="theme" id="dark" value="dark" onClick={handleTheme}/>
                <label htmlFor="dark">{text.headerDark}</label>
                <br />
                <button onClick={handleAuth}>{auth ? text.buttonLogout : text.buttonLogin}</button>
            </header>
    </div>
  )
}

export default Header;