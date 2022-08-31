import React from 'react'

function Footer({theme, text}) {
  return (
    <div className={theme}>
                <footer>
                    <h3>{text.footerTitle}</h3>
                </footer>
    </div>
  )
}

export default Footer;