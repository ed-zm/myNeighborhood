import React, {Component} from 'react';
import MapActions from '../actions/MapActions.jsx';
import MapStore from '../stores/MapStore.jsx';
import ListView from './ListView.jsx';
import { Col } from 'react-bootstrap';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

export default class Map extends Component {
    constructor(){
        super();
        this.state = {locations: [],
            map: {}
        }
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        MapStore.addChangeListener(this.onChange);
    }
    componentDidMount(){
        MapActions.loadMap();
    }
    componentWillUnmount(){
        MapStore.removeChangeListener(this.onChange);
    }
    onChange(){
        this.setState({map: MapStore.getMap()});
    }
    render(){
        return(
            <section style = {{height: "100%"}}>
                <GoogleMapLoader
                    id = "mapLoader"
                    containerElement = {
                        <div
                            style = {{height: "100%"}}
                        />
                    }
                    googleMapElement = {
                        <GoogleMap id = "map" defaultZoom = {14} defaultCenter = {{lat: 11.6984093,lng: -70.1893176}}>
                        </GoogleMap>
                    }
                />
            </section>
        );
    }
}
