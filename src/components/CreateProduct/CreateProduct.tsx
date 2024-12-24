import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/reducers/productReducer';
import { Button, TextField } from '@mui/material';

const CreateProduct: React.FC = () => {
  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    price: 0,
    description: '',
    image: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    price: Yup.number().required('Required').positive('Must be positive'),
    description: Yup.string().required('Required'),
    image: Yup.string().url('Must be a valid URL').required('Required'),
  });

  const handleSubmit = (values: any) => {
    const newProduct = {
      ...values,
      id: Date.now(), // Temporary ID generation
      isLiked: false,
    };
    dispatch(addProduct(newProduct));
    // Redirect or reset form logic can be added here
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange }) => (
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

          <Button type="submit" variant="contained" color="primary">Create Product</Button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateProduct;