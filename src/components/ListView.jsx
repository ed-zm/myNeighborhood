import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
export default class ListView extends Component {
    render(){
        const LocationsId = this.props.locations.map(location => {
            return (<ListGroupItem>{location.name}</ListGroupItem>);
        });
        return(
                <ListGroup>
                    {LocationsId}
                </ListGroup>
        );
    }
}
