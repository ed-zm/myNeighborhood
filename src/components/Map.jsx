import React, {Component} from 'react';
import MapActions from '../actions/MapActions.jsx';
import MapStore from '../stores/MapStore.jsx';

export default class Map extends Component {
    constructor(){
        super();
        this.state = {locations: [],
            mapp: null,
            data: null
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
    }
    componentWillUnmount(){
        MapStore.removeChangeListener(this.setLocations);
    }
    setMap(){
        this.setState({mapp: MapStore.getMap()})
    }
    setLocations(){
        let locations = this.props.locations.slice();
        locations.push(MapStore.getLocation());
        this.props.setLocations(locations);
    }

    render(){
        return(
            <div>
                    <div id = "map" style = {{ width: "100%", height: 400}}>
                    </div>
            </div>
        );
    }
}
