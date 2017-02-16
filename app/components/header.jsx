import React from 'react';
import {render} from 'react-dom';
import '@blueprintjs/core/dist/blueprint.css';

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src="images/logo.jpg" />
            </div>
            <div className="pt-input-group">
                <span className="pt-icon pt-icon-search" />
                <input className="pt-input" type="search" placeholder="Company Name" dir="auto" />
            </div>
            <img src="images/Chat.png" />
            <img src="images/Notifications.png" />
            <img src="images/Image.png" />
            <p>Maximillian Beekeeper</p>
        </div>
    );
};

export default Header;
