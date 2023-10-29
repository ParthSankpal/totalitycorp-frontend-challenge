import React from 'react';
import { useCart } from '../reducers/CartContext';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (index) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <img
              className="cart-item-image"
              src={item.images[0]} // Use the first image (or adjust as needed)
              alt="product image"
            />
            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p>Price: ${item.selling_price}</p>
            </div>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
