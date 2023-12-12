import { useSelector } from 'react-redux';
import Total from '../../components/Total/index';
import CartItem from '../../components/CartItem/index';
import './index.css';

export default function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <div className='cart'>
      <div className='left'>
      <h2>Корзина</h2>
        <div>
          { cart.productData?.length ?
            cart.productData.map((item) => (
            <CartItem
              key={item._id}
              _id={item._id}
              image={item.image}
              name={item.name}
              price={item.price} 
              quantity={item.quantity}
            />
          )) : <p>В корзине ничего нет...</p>
          }
        </div>
      </div>

      <Total/>
    </div>
  )
}
