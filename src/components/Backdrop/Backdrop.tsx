import React from 'react';
import './Backdrop.css';

interface IProps {
    click: any;
}

const Backdrop = (props: IProps) => (
    <div className="backdrop" onClick={props.click}></div>
);

export default Backdrop;