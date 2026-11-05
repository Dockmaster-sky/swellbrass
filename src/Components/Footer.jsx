import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="footer__logo--container">
                <div className="footer__logo"> Logo Here</div>
            </div>
            <div className="copyright">
                <h1>&copy; copyright 2026</h1>
            </div>
            <div className="btn__container">
                <button className="btn">Back To Top</button>
            </div>
        </div>
    </div>
  )
}

export default Footer