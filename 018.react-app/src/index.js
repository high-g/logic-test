import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const countReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCR":
            return state + 1;
        case "DECR":
            return state + 1;
        default:
            return state;
    }
}

const reducer = combineReducers({
    count: countReducer
}) 