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
            <ul>
                <Link
                 activeClass="active"
                 to="Education"
                 onClick={props.click}
                 spy={true}
                 smooth={true}
                 offset={0}
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
                 to="Experience"
                 onClick={props.click}
                 spy={true}
                 smooth={true}
                 offset={0}
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
                 to="TechStack"
                 onClick={props.click}
                 spy={true}
                 smooth={true}
                 offset={0}
                 duration={1500}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Tech stack
                </Link>
            </ul>
        </nav>
    );
};

export default SideDrawer;