import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const loadData = async (URL) => {
    const response = await fetch(URL);
    const info = await response.json();
    setData(info);
  };
  useEffect(() => {
    loadData(url);
  }, [url]);

  return data;
};

export default useFetch;
