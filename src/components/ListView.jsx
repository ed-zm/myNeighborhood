import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import PlaceDetails from './PlaceDetails.jsx'
export default class ListView extends Component {

    /*isEmpty(){
        if (this.props.locations == ''){
            console.log("no hay nada");
        }
        else{
            const locations = this.props.locations.map(location =>{
                return(<PlaceDetails location = {location}/>);
            });
            console.log(locations);

        }
    }*/
    render(){
        const locations =  this.props.locations.map(location =>{
            return(<PlaceDetails key = {location.place_id.toString()} location = {location} />);
        });
        return(
                <ListGroup>
                    {locations}
                </ListGroup>
        );
    }
}
