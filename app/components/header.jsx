import React from 'react';
import {render} from 'react-dom';
import styles from '../../styles/header.styl';
import '@blueprintjs/core/dist/blueprint.css';

const Header = () => {
    return (
        <div className="header">
            <div id="logo">
                <img src="images/test_service_directory-0.jpg" width="121" height="41"/>
            </div>
            <div className="pt-input-group" id="serviceSearch">
                <span className="pt-icon pt-icon-search" id="iconStyle"/>
                <input className="pt-input" type="search" id="as" placeholder="Company Name" dir="auto" />
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
