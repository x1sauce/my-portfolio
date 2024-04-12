import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import data from "../data/index.json";
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from "../svgs/work.svg";
import { ReactComponent as SchoolIcon } from "../svgs/school.svg";

const Experience = () => {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };

    return (
        <section className="experience-section" id="Experience">
            <div className="portfolio-container">
                <p className="portfolio-container-title">Experience</p>
                <h2 className="portfolio-container-heading">My Timeline</h2>
            </div>
            <div className="timeline-container">
                <VerticalTimeline>
                    {data.timelineElements.map((item) => {
                        let isWorkIcon = item.icon === "work";

                        return (
                            <VerticalTimelineElement
                                className="timeline-element-card"
                                key={item.id}
                                date={item.date}
                                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            >
                                <h3 className="timeline-element-title">{item.title}</h3>
                                <h4 className="timeline-element-subtitle">{item.location}</h4>
                                <p className="timeline-element-description">{item.description}</p>
                            </VerticalTimelineElement>
                        )
                    })}
                </VerticalTimeline>
            </div>
        </section>
    )
}

export default Experience;