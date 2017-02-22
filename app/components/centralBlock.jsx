import React from 'react';
import {render} from 'react-dom';
import Service from './service'
import styles from '../../styles/centralBlock.css';
import '@blueprintjs/core/dist/blueprint.css';


export default class CentralBlock extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var itemsNodes = this.props.serviceDatalist.map(function (item) {
            return (
                <Service serviceDatalist={item} key={item.id}>
                </Service>
            );
        });
        
        return <div className="centralBlock">
            <div className="head">
                <h2>Service directory</h2>
                <button type="button" className="pt-button" id="button">Add New Service</button>
            </div>
            <div className="block">
                {itemsNodes}
            </div>
        </div>
    }
}
