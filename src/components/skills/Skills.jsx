import React from "react";
import "./skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Coding from "./Coding";
import Tools from "./Tools";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">SKILLS</h2>
            <span className="section__subtitle">TECHNICAL</span>

            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
                <Coding/>
                <Tools/>
            </div>
        </section>
    )
}

export default Skills