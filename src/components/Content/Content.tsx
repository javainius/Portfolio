import React from 'react';
import Education from './ContentParts/Education';
import Experience from './ContentParts/Experience';
import TechStack from './ContentParts/TechStack';
import Contacts from './ContentParts/Contacts';
import Projects from './ContentParts/Projects';
import AboutMe from './ContentParts/AboutMe';
import './Content.css';

const Content = () => {
    return(
        <div className="content">
            <div className="aboutMeParallax"></div>
            <AboutMe/>
            <div className="techStackParallax"></div>
            <TechStack/>
            <div className="experienceParallax"></div>
            <Experience/>
            <div className="educationParallax"></div>
            <Education/>
            <div className="projectsParallax"></div>
            <Projects/>
            <div className="contactsParallax"></div>
            <Contacts/>
        </div>
    );
}

export default Content;