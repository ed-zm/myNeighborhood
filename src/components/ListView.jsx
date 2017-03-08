import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
export default class ListView extends Component {
    render(){
        return(
            <ListGroup>
                <ListGroupItem href = "#">Link1</ListGroupItem>
                <ListGroupItem href = "#">Link2</ListGroupItem>
                <ListGroupItem href = "#">Link3</ListGroupItem>
            </ListGroup>
        );
    }
}
