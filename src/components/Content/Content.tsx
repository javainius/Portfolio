import React from 'react';
import Education from './ContentParts/Education';
import Experience from './ContentParts/Experience';
import TechStack from './ContentParts/TechStack';

const Content = () => {
    return(
        <div>
            <Education/>
            <Experience/>
            <TechStack/>
        </div>
    );
}

export default Content;