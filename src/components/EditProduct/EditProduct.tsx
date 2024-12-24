import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct } from '../../store/reducers/productReducer';
import { useParams, useNavigate  } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

const EditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state: any) =>
    state.products.products.find((product: any) => product.id === Number(id))
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const initialValues = {
    title: product.title,
    price: product.price,
    description: product.description,
    image: product.image,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    price: Yup.number().required('Required').positive('Must be positive'),
    description: Yup.string().required('Required'),
    image: Yup.string().url('Must be a valid URL').required('Required'),
  });

  const handleSubmit = (values: any) => {
    const updatedProduct = {
      ...values,
      id: product.id, // Keep the same ID
    };
    dispatch(editProduct(updatedProduct));
    navigate('/products'); // Redirect to products page after editing
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({  }) => (
        <Form>
          <Field
            name="title"
            as={TextField}
            label="Title"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <ErrorMessage name="title" component="div" />

          <Field
            name="price"
            as={TextField}
            label="Price"
            type="number"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <ErrorMessage name="price" component="div" />

          <Field
            name="description"
            as={TextField}
            label="Description"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <ErrorMessage name="description" component="div" />

          <Field
            name="image"
            as={TextField}
            label="Image URL"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <ErrorMessage name="image" component="div" />

          <Button type="submit" variant="contained" color="primary">Update Product</Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditProduct;
