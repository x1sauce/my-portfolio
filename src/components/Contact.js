import React from "react";

const Contact = () => {
    return (
        <section className="contact-section" id="Contact">
            <div>
                <p>Get In Touch</p>
                <h2>Contact Me</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
                </p>
            </div>
            <form className="form-container">
                <div className="input-container">
                    <lable htmlfor="first-name" className="contact-label">
                        <span>First Name</span>
                        <input type="text"
                            className="contact-input"
                            id="first-name"
                            name="first-name"
                            required
                        />
                    </lable>
                    <lable htmlfor="last-name" className="contact-label">
                        <span>Last Name</span>
                        <input type="text"
                            className="contact-input"
                            id="last-name"
                            name="last-name"
                            required
                        />
                    </lable>
                    <lable htmlfor="email" className="contact-label">
                        <span>Email</span>
                        <input type="email"
                            className="contact-input"
                            id="email"
                            name="email"
                            required
                        />
                    </lable>
                    <lable htmlfor="phone-number" className="contact-label">
                        <span>Phone</span>
                        <input type="number"
                            className="contact-input"
                            id="phone-number"
                            name="phone-number"
                            required
                        />
                    </lable>
                </div>
                <lable htmlfor="choose-topic" className="contact-label">
                    <span>Choose a topic</span>
                    <select
                        className="contact-input"
                        id="choose-topic"
                        name="phone-number"
                        required>
                        <option>Select One...</option>
                        <option>Item 1</option>
                        <option>Item 2</option>
                        <option>Item 3</option>
                    </select>
                </lable>
                <lable htmlfor="message" className="contact-label">
                    <span>Message</span>
                    <textarea className="contact-input"
                        id="message"
                        name="message"
                        rows="8"
                        placeholder="Type your message..."
                    />
                </lable>
                <lable htmlfor="checkbox" className="checkbox-lable">
                    <input type="checkbox" name="checkbox" id="checkbox" required />
                    <span>I accept the terms</span>
                </lable>
                <div>
                    <button className="btn form-btn">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Contact;