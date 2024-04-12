import React from "react";
import data from "../data/index.json";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
    return (
        <section className="skills-section" id="Skills">
            <div className="skills-section-container-group">
                <div className="portfolio-container">
                    <p className="portfolio-container-title">My Skills</p>
                    <h2 className="portfolio-container-heading">My Expertise</h2>
                </div>
                <div className="skills-section-card-container">
                    {data.skills.map((item) => (
                        <div key={item.id} className="skills-section-card">
                            <div className="skills-section-card-image">
                                <img src={item.src} alt="placeholder" />
                            </div>
                            <div className="skills-section-card-content">
                                <h3 className="skills-section-card-title">{item.title}</h3>
                                <p className="skills-section-card-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;