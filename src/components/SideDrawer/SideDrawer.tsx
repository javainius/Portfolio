import React from 'react';
import './SideDrawer.css';
import { Link } from "react-scroll";

    //  import { Link, Element , Events, animateScroll as
    //     scroll, scrollSpy, scroller } from 'react-scroll';

interface IProps {
    show: Boolean;
    click: any;
}

const SideDrawer = (props: IProps) => {
    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    
    return (
        <nav className={drawerClasses}>
            <div className="buttons">
                <Link
                    activeClass="active"
                    to="introduction"
                    onClick={props.click}
                    spy={true}
                    smooth={true}
                    offset={-400}
                    duration={1500}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Name
                </Link>
                <Link
                    activeClass="active"
                    to="AboutMe"
                    onClick={props.click}
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={1500}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        About me
                </Link>
                <Link
                    activeClass="active"
                    to="TechStack"
                    onClick={props.click}
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={1500}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Tech stack
                </Link>
                <Link
                    activeClass="active"
                    to="Experience"
                    onClick={props.click}
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={1500}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Experience
                </Link>
                <Link
                    activeClass="active"
                    to="Education"
                    onClick={props.click}
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={1500}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Education
                </Link>
                <Link
                    activeClass="active"
                    to="Projects"
                    onClick={props.click}
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={1500}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Projects 
                </Link>
                <Link
                    activeClass="active"
                    to="Contacts"
                    onClick={props.click}
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={1500}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Contact me 
                </Link>
            </div>
        </nav>
    );
};

export default SideDrawer;