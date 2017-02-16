import React from 'react';
import {render} from 'react-dom';
import LeftBlock from './leftBlock';
import CentralBlock from './centralBlock';
import RightBlock from './rightBlock';


const Main = () => {
    return (
        <div>
            <LeftBlock />
            <CentralBlock />
            <RightBlock />
        </div>
    );
};

export default Main;