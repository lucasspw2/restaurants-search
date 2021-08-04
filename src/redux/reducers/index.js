import { combineReducers } from 'redux';

import restaurants from '../modules/restaurants';

export default combineReducers({ restaurants }); // caso tenha mais de um reducers incluir no combine
