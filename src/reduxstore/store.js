import {createStore , combineReducers , applyMiddleware} from "redux"
import AuthReducer from "./Authreducer";
import CartReducer from "./Cartreducer";
import thunk from "redux-thunk"

let middle=store=>next =>action => {
    // alert("reducer pe jane se pehle yahan rishwat do" + JSON.stringify(store.getState()))
    next(action)
}

var reducers = combineReducers({AuthReducer, CartReducer});

let store  =  createStore(reducers, applyMiddleware(middle,thunk))

export default store;