import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import countReducer from '../reducers/countReducer';
import numbersReducer from '../reducers/numbersReducer';

//responsible for creating the store first
 
const configureStore = () => {

    const store = createStore(combineReducers({
        count: countReducer,
        numbers: numbersReducer
    }), applyMiddleware(thunk));

    return store;
}

export default configureStore;