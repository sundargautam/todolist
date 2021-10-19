import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { userReducer } from './reducer/userReducer';

/*Intial State */
const initialState = {name:"sundar"};
/* for middleware*/
const middleware = [thunk];

/*register reducers*/
const reducers = combineReducers({userList:userReducer});

export const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middleware)));



