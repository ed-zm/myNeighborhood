import React, {Component} from 'react';
import MapActions from '../actions/MapActions.jsx';
import MapStore from '../stores/MapStore.jsx';

import ListView from './ListView.jsx';
import { Col } from 'react-bootstrap';

export default class Map extends Component {
    constructor(){
        super();
        this.state = {locations: [],
            mapp: null
        }
        this.setMap = this.setMap.bind(this);
        this.setLocations = this.setLocations.bind(this);
    }
    componentWillMount(){
        //MapStore.addChangeListener('MAP_CHANGE', this.setMap);
        MapStore.addChangeListener('MARKER_CHANGE', this.setLocations);
    }
    componentDidMount(){
        MapActions.loadMap();
        this
    }
    componentWillUnmount(){
        MapStore.removeChangeListener(this.onChange);
    }
    setMap(){
        this.setState({mapp: MapStore.getMap()})
    }
    setLocations(){
        let locations = this.state.locations.slice();
        locations.push(MapStore.getLocation());
        this.state.locations.push(MapStore.getLocation());
        this.setState({locations: locations},() => console.log(this.state.locations));
    }
    render(){
        return(
            <div>
                <Col md = {6}>
                    <div id = "map" style = {{ width: "100%", height: 600}}>
                    </div>
                </Col>
                <Col md = {6}>
                    <ListView locations = {this.state.locations}/>
                </Col>
            </div>
        );
    }
}
