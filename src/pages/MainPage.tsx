import useFetch from '../hooks/useFetch';
import './MainPage.css';
import CardList from '../components/Card/CardList';
import GuidComponent from '../components/guidComponent/GuidComponent';
import {useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const MainPage: React.FC = () => {
  const { error, loading } = useFetch('https://fakestoreapi.com/products');
  const [alert, setAlert] = useState(false)
  if (error) {
    return (
      <div className='error-message mt-5'>
        <p>Something Went Wrong. Try Again!</p>
      </div>
    );
  }

  if (loading) {
    return <div className="spinner-border text-primary spinner-div" role="status">
    <span className ="visually-hidden">Loading...</span>
  </div>;
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

  return (
    <div className='container mx-auto mb-5 mt-5 main' style={{paddingTop:'4rem'}}>
      <GuidComponent />
      <CardList cartAlert={cartAlert}/>
      {alert && (
        <div>
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default MainPage;
