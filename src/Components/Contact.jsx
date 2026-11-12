import React from 'react'
import "./Contact.css"
import horn from "../Assets/frenchHorn.jpg"

function Contact() {
  return (
    <div className="contact__body">
        <div className="divider"></div>
        <div className="container contact__container">
            <div className="row contact__row">
                <div className="contact__img--wrapper">
                    <img src={horn} alt="" className="contact__img" />
                </div>
                <div className="contact__details">
                    <h1>
                        Contact Information:
                    </h1>
                    <h2>Email: swellbrass@gmail.com</h2>
                    <h2>Venmo: @swellbrass</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
