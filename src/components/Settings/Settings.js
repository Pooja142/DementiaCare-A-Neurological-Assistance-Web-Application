import React from 'react';
import './Settings.css';
import Sidebar from '../Sidebar/Sidebar';
import FullHeight from "react-full-height";

const Settings = () => {
    return (
        <div className="settings">
            <Sidebar></Sidebar>
            <FullHeight>
                <h1>Add Settings...!</h1>
            </FullHeight>
        </div>
    );
};

export default Settings;