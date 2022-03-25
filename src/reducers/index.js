import { combineReducers } from 'redux';

import state from './Product';
// import menu from './menu';
import UserObj from './Login';



// export const reducers = combineReducers({ /*posts,*/ menu, clients });
export const reducers = combineReducers({UserObj, state});
