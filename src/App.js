import React from "react";
import Header from "./components/layout/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './routes/Home'
import Contact from "./routes/Contact";
import ConfirmOrder from "./routes/ConfirmOrder";
import ProductDetails from "./routes/ProductDetails";
import Payment from "./routes/Payment"
import Products from "./routes/Products";
import Whishlist from "./routes/Wishlist"

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/confirm' element={<ConfirmOrder/>} />
        <Route exact path='/payment' element={<Payment/>} />
        <Route exact path='/productDetails' element={<ProductDetails/>} />
        <Route exact path='/products' element={<Products/>} />
        <Route exact path='/wishlist' element={<Whishlist/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
