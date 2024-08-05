import React, { useState } from "react";
import "./dorothea.css";
import FirstLetter from "./Data";

const Dorothea = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Dorothea</h2>
            <span className="section__subtitle">Her</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-heart services__icon"></i>
                        <h3 className="services__title">Test Letter</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Hello!</h3>
                            <p className="services__modal-description">♡</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <p className="services__modal-info">{FirstLetter}</p>
                                </li>

                                
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Web <br/> Developer</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Web Developer</h3>
                            <p className="services__modal-description">Custom Website Creation: Offering bespoke, SEO-enhanced web development with WordPress/Elementor, tailored to boost engagement and functionality.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">UI Crafting: Enhancing user experience.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web Development: Crafting digital landscapes</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">UX Design: Interactive element creation.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Brand Boosting: Strategic online positioning.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Mockup Design: Conceptualizing digital products.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Professional <br/> Tutoring</h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Professional Tutoring</h3>
                            <p className="services__modal-description">Expert tutoring in math and algorithms. Personalized, one-on-one sessions tailored to elevate your understanding and performance.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Olympiad Excellence: 2nd & 3rd at regional level, now guiding students to achieve their best.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">UBB Math Admissions Coach: Specialized in Cluj's Math & CS University entrance exams.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Z-Builders Algorithm Tutor: Elevated 10+ students to programming contest success.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Data Structures Mentor: Empowered students to programming contest victories through focused algorithm training.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}

            </div>
        </section>
    )
}

export default Dorothea