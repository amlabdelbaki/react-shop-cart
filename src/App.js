
import './App.scss';

import WatchList from './components/watchList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Cart  from "./components/cart";
import Home from './components/home';
import ProductDetails from './components/productDetails';
import Header from './components/header';
import { store } from './rtk/store';
import {Provider} from 'react-redux'

function App() {
  return (
  <BrowserRouter>
  <Provider store={store}>
     <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/watchList" element={<WatchList/>} />
        <Route path="/cart" element={<Cart/>} />
 
      </Routes>
  </Provider>


  </BrowserRouter>

  );
}

export default App;
