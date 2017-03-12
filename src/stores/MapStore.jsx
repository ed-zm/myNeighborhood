import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import MapConstants from '../constants/MapConstants.jsx';
import {EventEmitter} from 'events';

 function CHANGE_EVENT(e){
    return e;
};
 let _map;
 let _location;
function setMap(mapp){
    _map = mapp;
}
function setLocation(marker){
    _location = (marker);
}
class MapStoreClass extends EventEmitter {
    emitChange(e) {
        this.emit(CHANGE_EVENT(e));
    }
    addChangeListener(e, callback){
        this.on(CHANGE_EVENT(e), callback);
    }
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT(e), callback);
    }
    getMap(){
        return _map;
    }
    getLocation(){
        return _location;
    }
}
const MapStore = new MapStoreClass();


MapStore.dispatchToken = AppDispatcher.register(action => {
    switch (action.actionType){
        case MapConstants.LOAD_MAP:
            setMap(action.mapp);
            MapStore.emitChange('MAP_CHANGE');
            break
        case MapConstants.CREATE_MARKER:
            setLocation(action.marker);
            MapStore.emitChange('MARKER_CHANGE');
            break
    }

});

export default MapStore;
