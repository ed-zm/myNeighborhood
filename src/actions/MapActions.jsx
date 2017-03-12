import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import GoogleMapsAPI from  '../utils/GoogleMapsAPI.jsx';
import MapConstants from '../constants/MapConstants.jsx';
import GoogleMapsLoader from 'google-maps';

export default {
    loadMap: () => {
        var mapp;
        GoogleMapsLoader.KEY = "AIzaSyBpvAOizJk7M_RIKGmqmUIDvPnbqKDEtCg";
        GoogleMapsLoader.LIBRARIES = ['places'];
        GoogleMapsLoader.load( google => {
            mapp = new google.maps.Map(document.getElementById('map'),{
                zoom: 14,
                center: {
                    lat: 11.6984093,
                    lng: -70.1893176
                    }
            });
            mapp.addListener('click', data => {
                if(data.placeId){
                    var marker;
                    let placeId = {placeId: data.placeId};
                    let placeService = new google.maps.places.PlacesService(mapp);
                    placeService.getDetails(placeId, (place, status) => {
                        if (status == google.maps.places.PlacesServiceStatus.OK){
                                marker = new google.maps.Marker({
                                position: data.latLng,
                                map: mapp
                            });
                            var placeSearch = new google.maps.places.PlacesService(map);
                            placeSearch.getDetails(placeId, (place, status) => {
                                if (status == google.maps.places.PlacesServiceStatus.OK){
                                    AppDispatcher.dispatch({
                                        actionType: MapConstants.CREATE_MARKER,
                                        marker: place
                                    });
                                }
                            });
                        }
                    });
                }
            })
            AppDispatcher.dispatch({
            actionType: MapConstants.LOAD_MAP,
            mapp: mapp
            });
        });
    },

    createListItem: () =>{},
    loadInfoWindow: () => {}

}
