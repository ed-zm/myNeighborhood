import React, { Component } from 'react';
import {FormGroup, FormControl, Button, Glyphicon} from 'react-bootstrap';

export default class SearchBar extends Component {
    render(){
        return(
                <FormGroup>
                    <FormControl type = "text" placeholder = "search" />
                    <Button type = "submit"><Glyphicon glyph = "search"/></Button>
                </FormGroup>
        );
    }

}
