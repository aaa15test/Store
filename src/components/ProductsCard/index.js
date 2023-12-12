import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import './index.css';

export const ProductsCard = ({ product }) => {
  const dispatch = useDispatch()
  const { price, image, description, name, id } =product;

  return (
    <div>
      <li className='product'>
        <div className='productImageWrapper'>
          <img src={image} alt='' width='150' className='productImage' />
        </div>
        
        <div className='productInfo'>
          <div>
            <h4 className='productName'>{name}</h4>
            <h4 className='productName'>{price} руб.</h4>
          </div>
          <button
            className='addToCartButton'
            onClick={() => dispatch(addToCart({
              _id: id, 
              name,
              image,
              price,
              quantity: 1,
              description
            }))}
          >
            В корзину
          </button>
        </div>
      </li>
    </div>
  )
}
