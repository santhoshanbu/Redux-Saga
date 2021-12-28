import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {applyMiddleware,compose,createStore} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import RootSaga from './Redux/sagas/RootSaga'
import reducer from './Redux/Reducer/index'

let sagaMiddle=createSagaMiddleware()

let store=compose(applyMiddleware(sagaMiddle))(createStore)(reducer)

sagaMiddle.run(RootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


