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
            <div className="parallax n2"></div>
            <TechStack/>
            <div className="parallax n3"></div>
            <Experience/>
            <div className="parallax n4"></div>
            <Education/>
            <div className="parallax n5"></div>
            <Projects/>
            <div className="parallax n6"></div>
            <Contacts/>
            <div className="parallax n7"></div>
        </div>
    );
}

export default Content;