import React, { useContext, useEffect, useState } from 'react';
import { Header, Products } from '../../components/index';
import CartContext from '../../contexts/CartContext';
import useFetch from '../../customHook/useFetch';

const CartPage = () => {
  const { carts } = useContext(CartContext);
  const [Data, setData] = useState(null);
  const url = 'https://63ff65b8370fe830d9e60a7c.mockapi.io/Products';
  const data = useFetch(url);
  useEffect(() => {
    if (data) {
      setData(
        data.filter((item) => carts.find((cart) => item.user_Id === cart)),
      );
    }
  }, [data, carts]);

  return (
    <>
      <Header />
      {!Data && <h1>nodata</h1>}
      {Data && Data.length === 0 && <h1>empty</h1>}
      {Data && Data.length > 0 && <Products PRODUCTS={Data} name="cartPage" />}
    </>
  );
};

export default CartPage;
