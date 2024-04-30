import React from "react"
import aboutMe from "../images/aboutme.jpg";

const AboutMe = () => {
    return (
        <section className="about-section" id="AboutMe">
            <div className="about-section-img">
                <img src={aboutMe} alt="About Me" />
            </div>
            <div className="about-section-content-box">
                <div className="about-section-content">
                    <p className="about-section-content-title">About</p>
                    <h1 className="about-section-content-heading">About Me</h1>
                    <p className="about-section-content-description">
                        Dedicated and versatile, I'm Shawn Huang—a Navy Veteran with a Secret Security Clearance and over nine years of experience maintaining, troubleshooting, and repairing technical equipment. Currently aspiring to transition into the role of a Junior Software Engineer, I bring a wealth of expertise garnered from leading teams in dynamic, fast-paced environments.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;