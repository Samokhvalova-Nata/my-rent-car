import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import './index.css';
import App from './components/App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter basename="/my-rent-car">
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);