import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Reducer';
import {fetchMemes} from "./action/index";
import thunk from 'redux-thunk';
const store = createStore(rootReducer,applyMiddleware(thunk));
store.subscribe(()=>console.log(store.getState()));
store.dispatch(fetchMemes());

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

