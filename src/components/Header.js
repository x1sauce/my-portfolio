import React from "react";
import { ReactTyped } from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper" id="Header">
            <div className="main-info">
                <h1>Web Development</h1>
                <ReactTyped
                    className="typed-text"
                    strings={[
                        "Web Design",
                        "Web development",
                        "Full Stack Developer", "Veteran"
                    ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#Contacts" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header;