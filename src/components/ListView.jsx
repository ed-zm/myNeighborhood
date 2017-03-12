import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PlaceDetails from './PlaceDetails.jsx';
import SearchBar from './SearchBar.jsx';

var filteredList = [];
var mapFiltered = function(self){
    console.log("entro a mapFiltered");
    console.log(self)
    let locations =  self.locations.map(location =>{
                return(<PlaceDetails key = {location.place_id.toString()} location = {location} />);
            });
    return locations;
}
export default class ListView extends Component {
    constructor(){
        super();
        this.state = {
            locations: null
        }
        this.getFiltered = this.getFiltered.bind(this);
    }
    getFiltered(filtered){
        console.log("__________________")
        this.setState({locations: filtered}, () => {console.log("ya entro en getFiltered")});
    }
    render(){
        const locations =  this.props.locations.map(location =>{
                    return(<PlaceDetails key = {location.place_id.toString()} location = {location} />);
                });
        return(
                <ListGroup>
                <SearchBar locations = {this.props.locations} getFiltered = {this.getFiltered}/>
                    {mapFiltered(this.state)}
                </ListGroup>
        );
    }
}
