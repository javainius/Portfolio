import React from 'react';
import './DrawerToggleButton.css';

interface IProps {
    click: any;
}

const drawerToggleButton = (props: IProps) => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button_line"></div>
        <div className="toggle-button_line"></div>
        <div className="toggle-button_line"></div>
    </button>
);

export default drawerToggleButton;