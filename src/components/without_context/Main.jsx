import React from 'react'

function Main({theme, text, auth}) {
  return (
    <div className={theme}>

      {auth ? <p>{text.mainHello}</p> : <p>{text.mainWelcome}</p>}
            <main >
                
                
                <p>{text.mainContent}</p>
            </main>
    </div>
  )
}

export default Main;