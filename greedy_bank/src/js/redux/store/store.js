import { createStore } from 'redux';
import rootReducer from '../reducers/combinedReducers';

const store = createStore(rootReducer);

export default store;


