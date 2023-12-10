import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardBox from '../components/Card/CardBox';
import useFetch from '../hooks/useFetch';
import './store.css';

const Store: React.FC = () => {
  const { data, error, loading } = useFetch('https://fakestoreapi.com/products');
  const [alert, setAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  if (error) {
    return (
      <div className="error-message mt-5">
        <p>Something Went Wrong. Try Again!</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="spinner-border text-primary spinner-div" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

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

  const filteredData = data?.filter((el) => (
    el.title.toLowerCase().includes(searchTerm.toLowerCase())
    
  )
    
  );

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div>
      <nav className="navbar bg-body-tertiary search">
        <div className="container-fluid d-flex justify-content-center">
          <form
            className="d-flex w-75"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={onChange}
              
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="w-100 mb-5 mt-5">
      {filteredData?.length === 0 ? (
          <div className="alert alert-dark" role="alert">
           <p className='text-center'>No products found for '{searchTerm}'</p>
        </div>
        ) : (
          <div className="row m-auto">
            {filteredData?.map((el) => (
              <div
                className="col-12 d-flex justify-content-center g-3 col-sm-6 col-md-4 col-lg-3"
                key={el.id}
              >
                <CardBox
                  id={el.id}
                  image={el.image}
                  price={el.price}
                  title={el.title}
                  cartAlert={cartAlert}
                />
              </div>
            ))}
          </div>
        )}
        {alert && <ToastContainer />}
      </div>
    </div>
  );
};

export default Store;
