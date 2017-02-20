import React from 'react';
import {render} from 'react-dom';
import LeftBlock from './leftBlock';
import CentralBlock from './centralBlock';
import RightBlock from './rightBlock';
import styles from '../../styles/main.css';

const Main = () => {
    return (
        <div className="main">
            <LeftBlock />
            <CentralBlock />
            <RightBlock />
        </div>
    );
};

export default Main;