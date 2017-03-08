import React, {Component} from 'react';
import GoogleMapsLoader from 'google-maps';
export default class Map extends Component {
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
            map.addListener('click', data => {
                console.log("Hola" + JSON.stringify(data));
                if (data.placeId){
                    var placeId = {placeId: data.placeId};
                    var placeService = new google.maps.places.PlacesService(map);
                    placeService.getDetails(placeId, (place, status) => {
                        if (status == google.maps.places.PlacesServiceStatus.OK){
                            var marker = new google.maps.Marker({
                                position: data.latLng,
                                map: map
                            });
                            console.log("marker added");
                        }
                    });
                }
                else{
                    console.log("there is not a interesting place over here");
                }
            });
        });
    }
    render(){
        return(
            <div>
                <div id = "map" style = {{ width: "100%", height: 600, border: "1px solid black"}}>

                </div>
            </div>
        );
    }
}
