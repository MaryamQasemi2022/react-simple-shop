import React from 'react';
import { Products } from '../../components/index';
import useFetch from '../../customHook/useFetch';

const Home = () => {
  const url = 'https://63ff65b8370fe830d9e60a7c.mockapi.io/Products';
  const data = useFetch(url);

  return (
    <>
      {!data && 'loading..'}
      {data && <Products PRODUCTS={data} name="products" />}
    </>
  );
};

export default Home;
