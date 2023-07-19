import {createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension'
import { cartReducer } from './reducers/cart';

const rootReducer = combineReducers({
    cartReducer
    //cart: cartReducer  (এভাবেও লেখা যাই)
})

// const myLogger = (store) => (next) => (action) => {
//     console.log(`Prev State: ${JSON.stringify(store.getState())}`);
//     console.log(`ACTION: ${JSON.stringify(action)}`);
//     next(action)
// }

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))