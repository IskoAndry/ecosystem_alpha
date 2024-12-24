import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';
 //console.log(API_URL)
export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};