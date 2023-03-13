/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  Contact,
  About,
  Nopage,
  Blog,
  SingleProduct,
  CartPage,
} from '../index';
import { Layout } from '../../components/index';
import './App.css';
import ThemeContext from '../../contexts/ThemeContext';
import CartContex from '../../contexts/CartContext';
import CartReducer from '../../reducers/Cart.reducer';
// import ThemeConfig from "./../../config/ThemeConfig";

const App = () => {
  const [themeActive, setThemeActive] = useState('light');
  const [state, dispatch] = useReducer(CartReducer, {
    carts: localStorage.getItem('carts')
      ? JSON.parse(localStorage.getItem('carts'))
      : [],
  });

  return (
    <CartContex.Provider
      value={{ carts: state.carts, dispatchCarts: dispatch }}
    >
      <ThemeContext.Provider value={{ theme: themeActive, setThemeActive }}>
        <div className={themeActive === 'dark' ? 'app dark' : 'app'}>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<Nopage />} />
              </Route>
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cartpage" element={<CartPage />} />
            </Routes>
          </Router>
        </div>
      </ThemeContext.Provider>
    </CartContex.Provider>
  );
};

export default App;
