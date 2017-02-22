import React from 'react';
import {render} from 'react-dom';
import Advertisment from './advertisment';
import ListOfAdv from './listOfAdv';
import styles from '../../styles/rightBlock.css';

export default class RightBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            peopleList: [
                {
                    id: "1",
                    img: "images/face1.jpg",
                    name: "Dennis Adams",
                    occupation: "Dentist(Practice Owner)",
                    address: "London, England",
                    kindOfEvent: "Add Friend"
                },
                {
                    id: "2",
                    img: "images/face2.jpg",
                    name: "Mary Carpenter",
                    occupation: "Dentist(Practice Owner)",
                    address: "Belgrade, Serbia",
                    kindOfEvent: "Add Friend"
                },
                {
                    id: "3",
                    img: "images/face3.jpg",
                    name: "Danielle Salazar",
                    occupation: "Dentist(Practice Owner)",
                    address: "Paris, France",
                    kindOfEvent: "Add Friend"
                }
            ],
            productsList: [
                {
                    id: "1",
                    img: "images/prod1.jpg",
                    name: "Product Name",
                    occupation: "Product Short Description. The quick brown fox jumps over the lazy dog",
                },
                {
                    id: "2",
                    img: "images/prod2.jpg",
                    name: "Product Name",
                    occupation: "Product Short Description. The quick brown fox jumps over the lazy dog"
                },

            ]
        }
    }

    render() {
        var peopleList = this.state.peopleList.map(function (item) {
            return (
                <ListOfAdv list={item} key={item.id}>
                </ListOfAdv>
            );
        });

        var productsList = this.state.productsList.map(function (item) {
            return (
                <ListOfAdv list={item} key={item.id}>
                </ListOfAdv>
            );
        });

        return <div className="rightBlock">
            <div className="topAdv">
                <p>People you may know</p>
                <a>See all</a>
                {peopleList}
            </div>
            <div className="productAdv">
                <p>Featured Products</p>
                <a>See all</a>
                {productsList}
            </div>
            <Advertisment image="images/cool.jpg"/>
        </div>
    }
}