import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <a href="/">
                    <h1 className="footer__title">Kunal</h1>
                </a>
                <ul className="footer__list">
                    <li>
                        <a href="/#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="/#portofolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="/#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://api.whatsapp.com/send?phone=918733017222&text=Hello!" className="footer__social-link" >
                        <i class="bx bxl-whatsapp"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/kunal-hindocha-a939b1212" className="footer__social-link" >
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/kunalh810" className="footer__social-link" >
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; 2024 kunalh810. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;