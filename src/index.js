import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import Header from './Header';
import Home from './Home';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productpage from './Productpage';
import About from './About';
import Cart from './component/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
   <BrowserRouter>
    <Routes>
      <Route path="/"exact element={<Home/>}/>
      <Route path="/Product" element={<Productpage/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
