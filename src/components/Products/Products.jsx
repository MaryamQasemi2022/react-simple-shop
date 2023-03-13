import React from 'react';
import { Product } from '../index';
import './Products.css';

const Products = ({ PRODUCTS, name }) => (
  <div className="Products">
    {PRODUCTS.map((item) => (
      <Product key={`${name}_${item.user_Id}`} product={item} />
    ))}
  </div>
);

export default Products;
