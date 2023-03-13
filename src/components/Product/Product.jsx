/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { MdAddShoppingCart, MdRemoveShoppingCart } from 'react-icons/md';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Button } from '../index';

import CartContext from '../../contexts/CartContext';

const Product = ({ product }) => {
  const { carts, dispatchCarts } = useContext(CartContext);

  const added = carts.includes(product.user_Id);
  const handleAdd = () => {
    if (added) {
      dispatchCarts({ type: 'REMOVE_FROM_CART', user_Id: product.user_Id });
    } else {
      dispatchCarts({ type: 'ADD_TO_CART', user_Id: product.user_Id });
    }
  };
  return (
    <ul className="Product">
      <li>
        <Link to={`/product/${product.user_Id}`}>
          <h3>{product.name}</h3>
        </Link>
        <div className="box-img">
          <img src={product.image} alt="food" />
        </div>
        <div className="info">
          <h4>
            {product.price}
            {' '}
            $
          </h4>
          <h4>
            <span>{`(${product.star})`}</span>

            {new Array(Math.floor(product.star)).fill(0).map((item, index) => (
              <BsStarFill style={{ color: 'gold' }} key={index} />
            ))}
            {Math.ceil(product.star) - Math.floor(product.star) > 0 && (
              <BsStarHalf style={{ color: 'gold' }} />
            )}
          </h4>
          <Button handleClick={handleAdd}>
            {added ? (
              <>
                remove from card
                <MdRemoveShoppingCart
                  style={{ marginLeft: '10px', fontSize: '1rem' }}
                />
              </>
            ) : (
              <>
                add to card
                <MdAddShoppingCart
                  style={{ marginLeft: '10px', fontSize: '1rem' }}
                />
              </>
            )}
          </Button>
        </div>
      </li>
    </ul>
  );
};

export default Product;
