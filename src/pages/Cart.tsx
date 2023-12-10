import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import SelectedCard from '../components/selectedCard/SelectedCard';
import { deleteItemFromCart } from '../redux/slices/ecom.slice';
import './cart.css';


interface CartItem {
  id: number;
  title: string;
  images: string[];
  price: number;
  quantity: number;
}

interface RootState {
  ecoslice: {
    transfers: CartItem[];
  };
}

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.ecoslice.transfers);
  const [counters, setCounters] = useState<number[]>(cartItems.map(() => 1));
  const dispatch = useDispatch();

  const increaseAmount = (index: number) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] += 1;
      return newCounters;
    });
  };

  const deleteItem = (index: number) => {
    dispatch(deleteItemFromCart(index));
  };

  const decreaseAmount = (index: number) => {
    if (counters[index] !== 1) {
      setCounters((prevCounters) => {
        const newCounters = [...prevCounters];
        newCounters[index] -= 1;
        return newCounters;
      });
    }
  };

  const totalPrice = cartItems.reduce((total, item, index) => {
    return total + item.price * counters[index];
  }, 0);

  return (
    <div className='mb-5 cart-content'>
      <h4 className='text-center m-5'>Total Price: {totalPrice.toFixed(2)} $</h4>
      <SelectedCard
        decreaseAmount={decreaseAmount}
        increaseAmount={increaseAmount}
        amounts={counters}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default Cart;
