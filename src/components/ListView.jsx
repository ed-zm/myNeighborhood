import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import PlaceDetails from './PlaceDetails.jsx';
import SearchBar from './SearchBar.jsx';
export default class ListView extends Component {
    render(){
        const locations =  this.props.locations.map(location =>{
            return(<PlaceDetails key = {location.place_id.toString()} location = {location} />);
        });
        return(
                <ListGroup>
                    <SearchBar/>
                    {locations}
                </ListGroup>
        );
    }
}
