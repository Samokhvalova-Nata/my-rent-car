import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import './index.css';
import App from './components/App/App';
import { store } from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter basename="/my-rent-car">
          <App />
        </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);