import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {store, persistor} from "./redux/store";
import "./styles/base.scss"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

