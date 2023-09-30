import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';
import { ProductCard } from './ProductCard';
import { FilterProduct } from './FilterProduct';

export const ProductContainer = () => {
  const [data, setData] = useState([]);
  const [selectCategory, setSelectCategory] = useState('');

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const categories = ['all', ...new Set(data.map((item) => item.category))];
  const filterData = data.filter((data) => data.id);

  console.log(filterData);
  return (
    <Container maxWidth={'lg'}>
      <FilterProduct
        categories={categories}
        setSelectCategory={setSelectCategory}
      />
      <ProductCard filterData={filterData} />
    </Container>
  );
};
