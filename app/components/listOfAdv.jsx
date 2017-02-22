import React from 'react';
import {render} from 'react-dom';
import styles from '../../styles/listOfAdv.css';

export default class ListOfAdv extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="listOfAdv">
                <div className="name">{this.props.list.name}</div>
		   		<div className="foto"><img src={this.props.list.img}/></div>
                <div className="companyName"> {this.props.list.companyName}</div>
                <p>{this.props.list.occupation}</p>
                <p>{this.props.list.address}</p>
                <a id="kindOfEvent">{this.props.list.kindOfEvent}</a>
		   </div>
    }
}