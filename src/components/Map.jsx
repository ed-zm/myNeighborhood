import React, {Component} from 'react';
import GoogleMapsLoader from 'google-maps';

export default class Map extends Component {
    componentDidMount(){
        GoogleMapsLoader.KEY = "AIzaSyBpvAOizJk7M_RIKGmqmUIDvPnbqKDEtCg";
        //GoogleMapsLoader.LANGUAGE = 'es';
        //GoogleMapsLoader.REGION = 'VEN';
        GoogleMapsLoader.load(function(google) {
            new google.maps.Map(document.getElementById('map'),
            {
                zoom: 4,
                center: {
                    lat: -25.363,
                    lng: 131.044
                }
            });
        });
    }
    render(){
        return(
            <div>
                <h1> Map </h1>
                <div id = "map" style = {{ width: "100%", height: 400, border: "1px solid black"}}>
                    <pre>asdasdasd</pre>
                </div>
            </div>
        );
    }
}
