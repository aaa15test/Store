import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/index';
import './index.css';

const Navigation = () => {
  return(
    <nav className='navWrapper'>
      <div className='pages'>
        <Link to='/foodstuffs' className='page'>Продукты питания</Link>
        <Link to='/clothes' className='page'>Одежда</Link>
        <Link to='/electronics' className='page'>Электроника</Link>
      </div>
      <div>
        <input type='checkbox' id='check' />
        <label for='check'>
          <i id='btn' className='cartButton'>🛒</i>
          <i id='cancel' className='cartButton'>✖️</i>
        </label>
        <div className='sidebar'>
          <Cart />
        </div>
      </div>        
    </nav>
  )
};

export default Navigation;
