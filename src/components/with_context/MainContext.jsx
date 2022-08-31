import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import LanguageContext from '../../context/LanguageContext';
import ThemeContext from '../../context/ThemeContext';

function MainContext() {
  const {theme} = useContext(ThemeContext);
  const {text} = useContext(LanguageContext);
  const {auth} = useContext(AuthContext);
  return (
    <div className={theme}>

      {auth ? <p>{text.mainHello}</p> : <p>{text.mainWelcome}</p>}
            <main >
                
                
                <p>{text.mainContent}</p>
            </main>
    </div>
  )
}

export default MainContext;