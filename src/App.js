import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Alert } from 'bootstrap/dist/js/bootstrap.bundle.min';
import MainLayout from './Layout/MainLayout';
import Landing from './Components/Landing';
import AboutUs from './Components/AboutUs';
import DataMenu from './Components/DataMenu'
import Cart from './Components/Cart';
import Invoice from './Components/Invoice';
import CallUs from './Components/CallUs';



function App() {


  
  return(

    
    <Provider store={store}>
    <>
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
      <Route path='/callus' element={< CallUs/>}></Route>
      <Route path='/datamenu' element={<DataMenu/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/invoice' element={<Invoice/>}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
    
    </>
</Provider>

  )
}

export default App;
