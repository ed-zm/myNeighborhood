import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import MapConstants from '../constants/MapConstants.jsx';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';
 let _map;
function setMap(map){
    _map = map;
}
class MapStoreClass extends EventEmitter {
    emitchange() {
        this.emit(CHANGE_EVENT);
    }
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }
    getMap(){
        return _map;
    }
}
const MapStore = new MapStoreClass();


MapStore.dispatchToken = AppDispatcher.register(action => {
    switch (action.actionType){
        case MapConstants.LOAD_MAP:
            setMap(action.map);
            MapStore.emitchange();
            break
    }
});

export default MapStore;
