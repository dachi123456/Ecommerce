// CardBox.tsx
import React from 'react';
import { CardI } from '../../interfaces/interfaces';
import './CardBox.css';
import { useDispatch } from 'react-redux';
import { transfer } from '../../redux/slices/ecom.slice';
import { Link } from 'react-router-dom';


const CardBox: React.FC<CardI> = ({ image, price, title, id, cartAlert}) => {
  const dispatch = useDispatch();
  const newItem = { image, title, price, id };

  const onButtonClick = () => {
    dispatch(transfer(newItem));
    cartAlert();
  };

  return (
    <div className="card-box">
      <div className="ml-auto d-flex justify-content-center">
        <Link to={`/product/${id}`}>
          <img src={image} alt="" />
        </Link>
      </div>
      <p>{title}</p>
      <span className="card-info d-flex justify-content-between">

       <div className="btns w-75">
        <button type="button" className="btn btn-outline-secondary mt-1" onClick={onButtonClick}>
            Add to Cart
          </button>
          <Link to={`/product/${id}`}>
          <button type="button" className="btn btn-outline-primary mt-1">
              See More
          </button>
        </Link>
       </div>
        <h6 className="mt-2">$ {price}</h6>
      </span>

     

    </div>
  );
};

export default CardBox;
