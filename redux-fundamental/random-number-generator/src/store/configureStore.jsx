import { createStore, combineReducers} from 'redux';
import countReducer from '../reducers/countReducer';
import numbersReducer from '../reducers/numbersReducer';

//responsible for creating the store first
 
const configureStore = () => {

    const store = createStore(combineReducers({
        count: countReducer,
        numbers: numbersReducer
    }));

    return store;
}

export default configureStore;