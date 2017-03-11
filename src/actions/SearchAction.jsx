import appDispatcher from '../dispatcher/AppDispatcher.jsx';
import SearchConstants from '../constants/SearchConstants.jsx'

export default{
    filterList: (){
        AppDispatcher.dispatch({
            actionType: SearchConstants.FILTER_LIST
        }),
    }
}
