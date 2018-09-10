import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const surveyData = (state = {}, action) => {
    if(action.type === 'Add_Response') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        surveyData,
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
