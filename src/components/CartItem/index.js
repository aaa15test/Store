import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem} from '../../redux/cartSlice';
import '../index.css';
import './index.css';

export default function CartItem({ _id, image, price, quantity = 0, name }) {
  const dispatch = useDispatch();

  return (
    <div className='cartItem'>
      <img className='cartItemImage' src={image} alt='cardItem' width='120' />
      <h4 className='cartItemTitle'>{name}</h4>
      <div className='cartItemInfo'>
        <div className='cartItemCnt'>
          <button
            className='cartItemCntButton'
            onClick={() => dispatch(decrementQuantity(_id))}
          >➖</button>
          <h4 className='quantity'>{quantity}</h4>
          <button
            className='cartItemCntButton'
            onClick={() => dispatch(incrementQuantity(_id))}
          >➕</button>
          <button
            className='removeCardItemButton' 
            onClick={() => dispatch(removeItem(_id))}
          >❌</button>
        </div>
        
        <p className='cartItemPrice'>
          <strong>{price}</strong>
          <small> руб.</small>
        </p>
      </div>
    </div>
  )
}
