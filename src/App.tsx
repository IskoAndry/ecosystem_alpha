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
        <Route path="/ecosystem_alpha/products/:id/edit" element={<EditProductPage />} />
        <Route path="/ecosystem_alpha/products/:id" element={<ProductDetails/>} />
        <Route path="/ecosystem_alpha/create-product" element={<CreateProductPage/>} />
        <Route path="/ecosystem_alpha/" element={<ProductsPage/>} />
      </Routes>
    </Router>
  );
};

export default App;