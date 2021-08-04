import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer); // criacao da store

export default store;
