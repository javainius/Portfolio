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
            <AboutMe/>
            <TechStack/>
            <Experience/>
            <Education/>
            <Projects/>
            <Contacts/>
        </div>
    );
}

export default Content;