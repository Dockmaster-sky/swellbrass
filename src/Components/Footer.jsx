import React from 'react'
import horn from "../Assets/SwellbrassLogo.png"

function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="footer__container">
                <div className="footer__logo--container">
                    <div className="footer__logo">
                        
                        <img src={horn} alt="" className="logo" />
                        </div>
                </div>
                <div className="copyright">
                    <h1>&copy; copyright 2026</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer