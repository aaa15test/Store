import { useSelector } from 'react-redux';

function Total() {
  const cart = useSelector(state => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.productData.forEach(item => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    })
    return {totalPrice, totalQuantity};
  }
 
  return (
    <div>
      <h3>Сумма заказа</h3>
      <div>
        <p>Количество товаров: <strong>{getTotal().totalQuantity}</strong></p>
        <p>Итого: <strong>{getTotal().totalPrice} руб.</strong></p>
      </div>
    </div>
  )
}

export default Total;
