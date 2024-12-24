import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../store/reducers/productReducer';
import { fetchProducts } from '../../services/api';
import ProductList from '../../components/ProductList/ProductList';
import Filter from '../../components/Filter/Filter';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.products);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 6;

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      dispatch(setProducts(productsData));
    };
    getProducts();
  }, [dispatch]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset to first page on search
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div>
      <h1>Products</h1>
      <Filter />
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ProductList products={paginatedProducts} />
      <Pagination
        count={Math.ceil(filteredProducts.length / itemsPerPage)}
        page={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsPage;