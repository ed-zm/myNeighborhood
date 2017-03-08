import React, { Component } from 'react';
import Map from './Map.jsx';
import Header from './Header.jsx';
import { Col, Grid } from 'react-bootstrap';
export default class App extends Component {
  render() {
    return (
    <div>
        <Header/>
        <Grid id = "main">
            <Col md = {12}>
                <Map/>
            </Col>
        </Grid>
    </div>
    );
  }
}
