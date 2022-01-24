import { applyMiddleware, combineReducers, createStore } from "redux";
// middleware 
import thunk from 'redux-thunk';

//react redux extenstion
import { composeWithDevTools } from 'redux-devtools-extension';

// import bookReducer 
import bookReducer from "../reducers/bookReducer";

const middleware = applyMiddleware(thunk)

//multiple reducers

const rootReducer = combineReducers({
    books: bookReducer
})

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;