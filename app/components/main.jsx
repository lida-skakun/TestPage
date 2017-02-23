import React from 'react';
import {render} from 'react-dom';
import LeftBlock from './leftBlock';
import CentralBlock from './centralBlock';
import RightBlock from './rightBlock';
import styles from '../../styles/main.styl';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceData: [
                {
                    id: "1",
                    img: "images/Shape51.png",
                    name: "Accountancy"
                },
                {
                    id: "2",
                    img: "images/Shape52.png",
                    name: "Associations"
                },
                {
                    id: "3",
                    img: "images/Shape54.png",
                    name: "Buy/Sell Dental Practice"
                },
                {
                    id: "4",
                    img: "images/Shape56.png",
                    name: "Clinical Waste Collection"
                },
                {
                    id: "5",
                    img: "images/Shape57.png",
                    name: "Computer Service"
                },
                {
                    id: "6",
                    img: "images/Shape58.png",
                    name: "CPR/Basic Life Support Training"
                },
                {
                    id: "7",
                    img: "images/Shape61588588.png",
                    name: "Dental Re-cruintment"
                },
                {
                    id: "8",
                    img: "images/Shape62298298.png",
                    name: "Dental Software"
                },
                {
                    id: "9",
                    img: "images/Shape63138138.png",
                    name: "Electrical Safety and Testing"
                },
                {
                    id: "10",
                    img: "images/Shape65206206.png",
                    name: "Marketing"
                },
                {
                    id: "11",
                    img: "images/Shape71107107.png",
                    name: "Others"
                },
                {
                    id: "12",
                    img: "images/Shape66632632.png",
                    name: "Repairs"
                },
                {
                    id: "13",
                    img: "images/Shape68201201.png",
                    name: "Solicitors"
                },
                {
                    id: "14",
                    img: "images/Shape75196196.png",
                    name: "Surgery Design"
                },
                {
                    id: "15",
                    img: "images/Shape69156156.png",
                    name: "Training and Courses"
                },
                {
                    id: "16",
                    img: "images/Shape72379.png",
                    name: "Web Design"
                },
                {
                    id: "17",
                    img: "images/Shape55839.png",
                    name: "Cleaning Agencies"
                },
                {
                    id: "18",
                    img: "images/Shape60107.png",
                    name: "Dental Chair Recovery"
                },
                {
                    id: "19",
                    img: "images/Shape64373.png",
                    name: "Equipment Engennering"
                },
                {
                    id: "20",
                    img: "images/Shape67646.png",
                    name: "Selling Gold"
                },
                {
                    id: "21",
                    img: "images/Shape70718.png",
                    name: "Uniform and Workwear"
                }
            ]
        }
    }

    render() {
        return <div className="main">
            <LeftBlock />
            <CentralBlock serviceDatalist={this.state.serviceData}/>
            <RightBlock />
        </div>
    }

}
