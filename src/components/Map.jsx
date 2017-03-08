import React, {Component} from 'react';
import GoogleMapsLoader from 'google-maps';
import ListView from './ListView.jsx';
import { Col } from 'react-bootstrap';

const map = {

}
export default class Map extends Component {
    constructor(props){
        super(props);
        this.state = {locations: []}
    }
    componentDidMount(){
        GoogleMapsLoader.KEY = "AIzaSyBpvAOizJk7M_RIKGmqmUIDvPnbqKDEtCg";
        GoogleMapsLoader.LIBRARIES = ['places'];
        GoogleMapsLoader.load( google => {
            var map = new google.maps.Map(document.getElementById('map'),
            {
                zoom: 14,
                center: {
                    lat: 11.6984093,
                    lng: -70.1893176
                }
            });
            var currentInfoWindow = false;
            map.addListener('click', data => {
                if (data.placeId){
                    var placeId = {placeId: data.placeId};
                    var placeService = new google.maps.places.PlacesService(map);
                    placeService.getDetails(placeId, (place, status) => {
                        if (status == google.maps.places.PlacesServiceStatus.OK){
                            var marker = new google.maps.Marker({
                                position: data.latLng,
                                map: map
                            });
                        }
                    });
                    var placeSearch = new google.maps.places.PlacesService(map);
                    placeSearch.getDetails(placeId, (place, status) => {
                        if (status == google.maps.places.PlacesServiceStatus.OK){
                            console.log(place);
                            this.state.locations.push(place);
                            this.setState({locations: this.state.locations});
                            console.log(this.state.locations);
                        }
                    });

                }
                else{
                    if (currentInfoWindow){
                        currentInfoWindow.close();
                    }
                    var infoWindow = new google.maps.InfoWindow({content: "<b>This is not a good place to visit</b>", position: data.latLng});
                    currentInfoWindow = infoWindow;
                    infoWindow.open(map);
                }
            });
        });
    }
    createMap(){

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
