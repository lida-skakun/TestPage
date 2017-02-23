import React from 'react';
import {render} from 'react-dom';
import Advertisment from './advertisment';
import ListOfAdv from './listOfAdv';
import styles from '../../styles/leftBlock.styl';

export default class LeftBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            advDatalist: [
                {
                    id: "1",
                    img: "images/picture1.jpg",
                    companyName: "Company Name",
                    occupation: "Manufacturer",
                    address: "Belgrade, Serbia",
                    kindOfEvent: "Follow now"
                },
                {
                    id: "2",
                    img: "images/picture2.jpg",
                    companyName: "Company Name",
                    occupation: "Service Provider",
                    address: "New York, USA",
                    kindOfEvent: "Follow now"
                },
                {
                    id: "3",
                    img: "images/picture3.jpg",
                    companyName: "Company Name",
                    occupation: "Supplier",
                    address: "London, England",
                    kindOfEvent: "Follow now"
                }
            ]
        }
    }

    render() {
        var advList = this.state.advDatalist.map(function (item) {
            return (
                <ListOfAdv list={item} key={item.id}>
                </ListOfAdv>
            );
        });

        return <div className="leftBlock">
            <nav>
                <a><img src="images/Feed859.png"/>Feed</a>
                <a><img src="images/Ask.png"/>Ask a colleague</a>
                <a><img src="images/Companies858.png"/>Companies</a>
                <a><img src="images/Services.png"/>Service Directory</a>
            </nav>
            <div className="advGroup">
                <Advertisment image="images/three1.jpg"/>
                <div className="advList">
                    <p>Featured Companies</p>
                    <a>See all</a>
                    {advList}
                </div>
                <div id="copyright">
                    <p>Denteeze Copyright 2015</p>
                    <a>Terms of use</a>
                    <a>Privacy Policy</a>
                </div>
            </div>
        </div>
    }
};
