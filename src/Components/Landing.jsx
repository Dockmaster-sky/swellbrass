import React from 'react'
import "./Landing.css"
import samImg from "../Assets/sam.jpg"

function Landing() {
  return (
    <div>
        <div className="landing__header">
            <div className="logo__wrapper">
                <img src="" alt="" className="logo" />
                Logo Here
            </div>
            <div className="button__container">
                <button className="btn header__btn">Contact</button>
            </div>
        </div>

        <div className="container landing__container">
            <div className="row landing__row">
                <div className="body landing__body">
                    <div className="pitch__container">
                        <h1 className="pitch__title">
                            About Me
                        </h1>
                        <p className="pitch__description">
                           My name is Sam, and I am passionate about playing the french horn. I have been playing for over <span className="orange">fifteen years</span> now, and I have been <span className="orange">playing in orchestras</span> 
                            &nbsp; for the past five years. I have been continuing my education with a college level teacher, and have begun to take on students of my own.
                        </p>
                        <p className="pitch__description">
                           I would like to offer you the lessons I have learned by my own experience. I offer 3 different student packages.
                        </p>
                        <div className="packages__container">
                            <div className="package">
                                <div className="package__top"></div>
                                <div className="package__body">
                                    <h1>Package 1</h1>
                                    <h2>Standard Package</h2>
                                    <p>30 Minute Lessons</p>
                                    <p>Rate of $60/Hr Plus $10 Travel Fee</p>
                                    <p>Recommended for: Beginners</p>
                                </div>
                                <div className="package__bottom"></div>
                            </div>
                            <div className="package">
                                <div className="package__top"></div>
                                <div className="package__body">
                                    <h1>Package 2</h1>
                                    <h2>Silver Package</h2>
                                    <p>45 Minute Lessons</p>
                                    <p>Rate of $60/Hr Plus $10 Travel Fee</p>
                                    <p>Recommended for: Experienced 5-12 Graders  </p>
                                </div>
                                <div className="package__bottom"></div>
                            </div>
                            <div className="package">
                                <div className="package__top"></div>
                                <div className="package__body">
                                    <h1>Package 3</h1>
                                    <h2>Gold Package</h2>
                                    <p>60 Minute Lessons</p>
                                    <p>Rate of $60/Hr Plus $10 Travel Fee</p>
                                    <p>Recommended for: Experienced Adults</p>
                                </div>
                                <div className="package__bottom"></div>
                            </div>
                        </div>

                    </div>
                    <div className="bio__img--wrapper">
                        <img src={samImg} alt="" className="bio__img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing