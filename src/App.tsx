import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CreateProductPage from './pages/CreateProductPage/CreateProductPage';
import EditProductPage from './pages/EditProductPage/EditProductPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products/:id/edit" element={<EditProductPage />} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/create-product" element={<CreateProductPage/>} />
        <Route path="/" element={<ProductsPage/>} />
      </Routes>
    </Router>
  );
};

export default App;