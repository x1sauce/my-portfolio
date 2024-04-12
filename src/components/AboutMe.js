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
                        Do nostrud aliqua exercitation commodo anim nulla voluptate. Sit nostrud commodo ut non Lorem tempor nulla magna nulla. Consectetur laborum eiusmod ea enim duis enim nulla reprehenderit eu cillum ut nisi. Do nostrud mollit magna laborum sint exercitation. Ipsum aliquip qui excepteur consectetur non magna mollit et labore ut occaecat elit.
                        Do nostrud aliqua exercitation commodo anim nulla voluptate. Sit nostrud commodo ut non Lorem tempor nulla magna nulla. Consectetur laborum eiusmod ea enim duis enim nulla reprehenderit eu cillum ut nisi. Do nostrud mollit magna laborum sint exercitation. Ipsum aliquip qui excepteur consectetur non magna mollit et labore ut occaecat elit.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;