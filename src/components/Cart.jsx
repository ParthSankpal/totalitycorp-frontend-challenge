import React,{useState} from 'react';
import { useCart } from '../reducers/CartContext';
import CheckoutModal from './CheckoutModal';

const Cart = () => {
  const { cart, dispatch } = useCart();
  const [isModalOpen, setModalOpen] = useState(false);

  const removeFromCart = (index) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });
  };

  const incrementQuantity = (index) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: index });
  };

  const decrementQuantity = (index) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: index });
  };

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.selling_price * item.quantity, 0);
  };


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className=''>
      <div className=" flex flex-col items-center  shadow dark:bg-gray-800 dark-border-gray-700">
      {cart.length === 0 ? (
        <p className=" text-gray-600 dark:text-white h-[50vh] flex align-middle items-center">ADD ITEMS TO CART</p>
      ) : (
        <>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 bg-white  dark:bg-gray-800 dark-border-gray-700'>
            {cart.map((item, index) => (
              <div className='flex justify-center p-2 md:m-3 h-auto'>
<div key={index} className="w-full flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow darkbg-gray-900 dark-border-gray-700">
                <div className='w-full flex justify-center p-3'>
                  <img
                    className="object-cover w-16 h-16 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded"
                    src={item.images[0]} // Use the first image (or adjust as needed)
                    alt="product image"
                  />
                </div>
                <div className="p-2 md:p-5">
                  <h5 className='text-xs md:text-xl font-semibold line-clamp-1 tracking-tight text-gray-900 '>{item.title}</h5>
                  <p>Price: ${item.selling_price}</p>
                  <div className="flex flex-col gap-3 md:justify-between ">
                    <div className='flex flex-row justify-center gap-4 align-middle items-center'>
                      <button className='"text-white text-xs md:text-lg lg:text-xl bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg p-2  text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800' onClick={() => decrementQuantity(index)}>-</button>
                      <a className='px-3  text-xs md:text-sm   font-bold p-1 rounded bg-blue-100 text-gray-800 dark-text-white'>
                        {item.quantity}
                      </a>
                      <button className='"text-white text-xs md:text-xl bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg p-2 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800' onClick={() => incrementQuantity(index)}>+</button>
                    </div>
                    <button className='text-white text-xs md:text-lg lg:text-xl bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg p-2 lg:px-5 lg:py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800' onClick={() => removeFromCart(index)}>Remove</button>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
          <div className="flex gap-12 my-12">
          <div >
          <div className="text-white text-xs md:text-lg lg:text-xl bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg p-2 lg:px-5 lg:py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800">
            Total Price: ${calculateTotalPrice()}
          </div>
          
          </div>
<div >

          <button onClick={openModal} className='text-white text-xs md:text-lg lg:text-xl bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg p-2 lg:px-5 lg:py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800'>Checkout</button>
</div>
        
          </div></>
      )}
    </div>
    <CheckoutModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Cart;
