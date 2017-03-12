import React, { Component } from 'react';
import Map from './Map.jsx';
import Header from './Header.jsx';
import { Col, Grid } from 'react-bootstrap';
import ListView from './ListView.jsx';

var locations = [];
export default class App extends Component {
    constructor(){
        super();
        this.state = {
            locations: []
        }
        this.setLocations = this.setLocations.bind(this);
    }
    setLocations(data){
        this.setState({locations: data});
    }
  render() {
    return (
        <div>
            <Header/>
                    <Map locations = {this.state.locations} setLocations = {this.setLocations}/>
                <Grid id = "main">
                <Col md = {12}>
                    <ListView locations = {this.state.locations}/>
                </Col>
            </Grid>
        </div>
    );
  }
}
