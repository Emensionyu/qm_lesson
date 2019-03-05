import { createStore} from 'redux';
import combineReducers from './reducers';

const store=createStore(combineReducers);
export default store;
