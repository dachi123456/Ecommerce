import { useSelector } from 'react-redux';
import './selectedCard.css'
import { EcomState } from '../../redux/slices/ecom.slice';
interface ClicksI {
  increaseAmount: (index: number) => void;
  decreaseAmount: (index: number) => void;
  deleteItem: (index:number) => void;
  amounts: number[];
}

interface ItemI {
  id: number;
  title: string;
  image: string;
  price: number;
}

const SelectedCard = ({ increaseAmount, decreaseAmount, amounts,deleteItem }: ClicksI) => {
  const cartItems = useSelector((state: EcomState) => state.ecoslice.transfers);

  return (
    <div className="w-100">
      {cartItems.map((item: ItemI, index:number) => (
        <div key={index} className="w-50 m-auto mt-5 row w-md-75">
          <div className="col-12 col-md-6 selected-img-div">
            <img src={item.image} alt="" className="w-100 " />
          </div>
          <div className="col-12 col-md-6">
            <p className='fs-5 text-secondary-emphasis fw-bold'>Price: $ {item.price}</p>
            <p className='mb-1 fst-italic'>Amount: {amounts[index]}</p> 
            <button onClick={() => increaseAmount(index)} className='plus-minus'>+</button>
            <button onClick={() => decreaseAmount(index)} className='plus-minus m-1'>-</button>
            <button onClick={() => deleteItem(index)} className='btn btn-danger d-block mt-2'>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedCard;