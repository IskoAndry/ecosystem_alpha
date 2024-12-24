import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = useSelector((state: any) =>
    state.products.products.find((product: any) => product.id === Number(id))
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Card>
      <CardMedia component="img" image={product.image} alt={product.title} />
      <CardContent>
        <Typography variant="h5">{product.title}</Typography>
        <Typography variant="body1">${product.price}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        <Link to="/products">
          <Button variant="contained" color="primary">Back to Products</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;