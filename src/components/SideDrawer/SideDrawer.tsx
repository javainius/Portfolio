import React from 'react';
import './SideDrawer.css';

interface IProps {
    show: Boolean;
}

const SideDrawer = (props: IProps) => {
    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;