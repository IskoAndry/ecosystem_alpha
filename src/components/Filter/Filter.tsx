import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../store/reducers/productReducer';

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state: any) => state.products.products);
  const favorites = useSelector((state: any) => state.products.favorites);

  const handleFilter = (filter: string) => {
    if (filter === 'all') {
      dispatch(setProducts(allProducts));
    } else {
      const filteredProducts = allProducts.filter((product: any) => favorites.includes(product.id));
      dispatch(setProducts(filteredProducts));
    }
  };

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={() => handleFilter('all')}>All Products</Button>
      <Button onClick={() => handleFilter('favorites')}>Favorites</Button>
    </ButtonGroup>
  );
};

export default Filter;