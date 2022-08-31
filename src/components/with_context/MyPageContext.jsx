import React from 'react'
import { AuthProvider } from '../../context/AuthContext';
import { LanguageProvider } from '../../context/LanguageContext';
import { ThemeProvider } from '../../context/ThemeContext';
import FooterContext from './FooterContext';
import HeaderContext from './HeaderContext';
import MainContext from './MainContext';


function MyPageContext() {

    
  return (
    <div className='my-page'>

        <ThemeProvider>

            <LanguageProvider>

                <AuthProvider>

                    <HeaderContext/>

                    <MainContext/>

                </AuthProvider>

                
                <FooterContext />

            </LanguageProvider>

        </ThemeProvider>

    </div>
  )
}

export default MyPageContext;


