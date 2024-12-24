import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { toggleFavorite, deleteProduct } from '../../store/reducers/productReducer';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    isLiked: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(toggleFavorite(product.id));
  };

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
  };

  return (
    <Card className="card">
      <CardMedia className="img" component="img" image={product.image} alt={product.title} />
      <CardContent>
        <Typography className="card-title">{product.title}</Typography>
        <Typography variant="body2">${product.price}</Typography>
        <div className="card-actions">
        <IconButton className="like-button" onClick={handleLike} color={product.isLiked ? 'primary' : 'default'}>
          <FavoriteIcon />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
        <Link to={`/products/${product.id}/edit`}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;