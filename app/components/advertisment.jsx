import React from 'react';
import {render} from 'react-dom';
import styles from '../../styles/advertisment.css';

export default class Advertisment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="adv">
            <p>Advertisment</p>
            <img src={this.props.image}/>
            <p id="firm">Ads By Denteez.com</p>
        </div>
    }
}