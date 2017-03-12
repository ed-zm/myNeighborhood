import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup,FormControl, Glyphicon, Button } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href = "#">My Neighborhood</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}
