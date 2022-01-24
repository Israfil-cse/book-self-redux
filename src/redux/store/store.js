import { combineReducers, createStore } from "redux";

//react redux extenstion
import { composeWithDevTools } from 'redux-devtools-extension';

// import bookReducer 
import bookReducer from "../reducers/bookReducer";

//multiple reducers

const rootReducer = combineReducers({
    books: bookReducer
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;