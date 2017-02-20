import React from 'react';
import {render} from 'react-dom';


export default class Service extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="service">
            <div className="fotoService"><img src={this.props.serviceDatalist.img}/></div>
            <div className="nameService"> {this.props.serviceDatalist.name}</div>
        </div>
    }
}

