import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import GoogleMapsAPI from  '../utils/GoogleMapsAPI.jsx';
import MapConstants from '../constants/MapConstants.jsx';

export default {
    loadMap: () => {
        let map = GoogleMapsAPI.getMap();
        AppDispatcher.dispatch({
            actionType: MapConstants.LOAD_MAP,
            map: map
        });
    },
    createMarker: (data) =>{
        let placeService = new google.maps.places.PlacesService(map);
        placeService.getDetails(placeId, (place, status) => {
            if (status == google.maps.places.PlacesServiceStatus.OK){
                var marker = new google.maps.Marker({
                    position: data.latLng,
                    map: map
                });
            }
        });
    },
    createListItem: () =>{},
    loadInfoWindow: () => {}

}
