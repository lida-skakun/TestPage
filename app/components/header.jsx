import React from 'react';
import {render} from 'react-dom';
import styles from '../../styles/header.css';
import '@blueprintjs/core/dist/blueprint.css';

const Header = () => {
    return (
        <div className="header">
            <div id="logo">
                <img src="images/logo.jpg" />
            </div>
            <div className="pt-input-group">
                <span className="pt-icon pt-icon-search" id="iconStyle"/>
                <input className="pt-input" type="search" placeholder="Company Name" dir="auto" />
            </div>
            <div className="icon">
                <img src="images/Chat.png" />
            </div>
            <div className="icon">
                <img src="images/Notifications.png" />
            </div>
            <div className="user">
                <img src="images/Image.png"/>
                <p>Maximillian Beekeeper</p>
            </div>
        </div>
    );
};

export default Header;
