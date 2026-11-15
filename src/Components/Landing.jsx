import React from 'react'
import samImg from "../Assets/sam.jpg"
import horn from "../Assets/SwellbrassLogo.png"

function Landing() {
  return (
    <div>
        <div className="landing__header">
            <div className="logo__wrapper">
                <img src={horn} alt="" className="logo" />
                
            </div>
            <div className="button__container">
                {/* <button className="btn header__btn">Contact</button> */}
            </div>
        </div>

        <div className="container landing__container">
            <div className="row landing__row">
                <div className="body landing__body">
                    <div className="pitch__container">
                        <div className="pitch__title--container">
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
                        </div>
                        <div className="packages__container">
                            <div className="package">
                                <div className="package__top"></div>
                                <div className="package__body">
                                    <h1>$30</h1>
                                    <h2>30 Minutes</h2>
                                    <p>$10 Travel Fee</p>
                                    <p>Recommended ages 8-13</p>
                                    <p>Recommended skill: Beginner.</p>
                                </div>
                                <div className="package__bottom"></div>
                            </div>
                            <div className="package">
                                <div className="package__top"></div>
                                <div className="package__body">
                                    <h1>$45</h1>
                                    <h2>45 Minutes</h2>
                                    <p>$10 Travel Fee</p>
                                    <p>Recommended ages 14-17</p>
                                    <p>Recommended skill: Beginner to intermediate.  </p>
                                </div>
                                <div className="package__bottom"></div>
                            </div>
                            <div className="package">
                                <div className="package__top"></div>
                                <div className="package__body">
                                    <h1>$60</h1>
                                    <h2>1 Hour</h2>
                                    <p>$10 Travel Fee</p>
                                    <p>Recommended ages 18+</p>
                                    <p>Recommended skill: Intermediate/Hobbyist.</p>
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