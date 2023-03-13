import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Products, Button } from '../../components';
import useFetch from '../../customHook/useFetch';

const SingleProduct = () => {
  const navigate = useNavigate();
  const goToBackPage = () => {
    navigate(-1);
  };
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const url = 'https://63ff65b8370fe830d9e60a7c.mockapi.io/Products';
  const data = useFetch(url);

  useEffect(() => {
    if (data) {
      setProduct(data.filter((item) => item.user_Id === id));
    }
  }, [id, data]);

  return (
    <>
      <div style={{ margin: '20px' }}>
        <Button handleClick={goToBackPage}>go back one Page</Button>
      </div>
      {product && <Products PRODUCTS={product} />}
    </>
  );
};

export default SingleProduct;
