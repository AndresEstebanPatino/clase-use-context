import React from 'react'
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';
import ThemeContext from '../../context/ThemeContext';

function FooterContext() {
  const {theme} = useContext(ThemeContext);
  const {text} = useContext(LanguageContext);
  return (
    <div className={theme}>
                <footer>
                    <h3>{text.footerTitle}</h3>
                </footer>
    </div>
  )
}

export default FooterContext;