import './ProductDetailsPage.css';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { transfer } from '../redux/slices/ecom.slice';
import { details } from '../interfaces/interfaces';
import { ToastContainer, toast } from 'react-toastify';

const ProductDetailsPage: React.FC = () => {
  const { id: ids } = useParams<{ id?: string }>();
  const [productDetails, setProductDetails] = useState<details | null>(null);
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();

  const cartAlert = () => {
    setAlert(true);
    toast.success('Item added to cart!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: 'green',
        color: '#fff',
      },
    });
  };

  const fetchData = useCallback(async (id: string) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProductDetails(data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }, []);

  useEffect(() => {
    if (ids) {
      fetchData(ids);
    }
  }, [ids, fetchData]);

  const addToCart = () => {
    if (productDetails) {
      const newItem = {
        id: productDetails.id,
        title: productDetails.title,
        image: productDetails.image,
        price: productDetails.price,
        
      };
      dispatch(transfer(newItem));
      cartAlert()
    }

  };

  if (!productDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container details-cont p-5 mt-5 m-auto'>
      <div className="row gap-md-5 d-flex justify-content-center mt-lg-5">

        <div className="details-img-div col-md-6">
          <img src={productDetails.image} alt={productDetails.title}/>
        </div>

        <div className='col-md-6 mt-2'>
          <h1 className='text-center'>{productDetails.title}</h1>
          <h5 className='text-center'>{productDetails.description}</h5>
          <p className='text-primary '>#{productDetails.category}</p>
          <p className='text-dark fs-4'>Price: $ {productDetails.price}</p>
          <button onClick={addToCart} className='btn btn-primary mt-3'>
            Add to Cart
          </button>
        </div>

      </div>
      {alert && <ToastContainer />}
    </div>
  );
};

export default ProductDetailsPage;
