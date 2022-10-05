import React from "react";
import Navbar from "./components/layout/Navbar";
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
import AddToCart from "./routes/AddToCart";
import Checkout from "./routes/Checkout";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/confirm' element={<ConfirmOrder/>} />
        <Route exact path='/payment' element={<Payment/>} />
        <Route exact path='/productDetails' element={<ProductDetails/>} />
        <Route exact path='/products' element={<Products/>} />
        <Route exact path='/wishlist' element={<Whishlist/>} />
        <Route exact path='/cart' element={<AddToCart/>} />
        <Route exact path='/checkout' element={<Checkout/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
