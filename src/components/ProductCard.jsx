import React, { useState } from "react";
import { useCart } from "../reducers/CartContext";

function ProductCard({ products }) {
  const { dispatch } = useCart();

  const [selectedItems, setSelectedItems] = useState([]);
  const [showPopover, setShowPopover] = useState(false);
  const [buttonText, setButtonText] = useState("Add to cart");
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = (products) => {
    // Add the selected product to the local state
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, products]);

    // You can also add it to the cart by dispatching an action
    dispatch({ type: "ADD_TO_CART", payload: products });

    // Show the popover and change the button text
    setShowPopover(true);
    setButtonText("Added to cart");
    setIsAddedToCart(true);

    // Reset the popover and button text after a delay (e.g., 3 seconds)
    setTimeout(() => {
      setShowPopover(false);
      setButtonText("Added to cart");
    }, 3000); // Adjust the delay as needed
  };

  return (
    <div className=" flex justify-center p-2 md:m-3 h-auto	">
      <div
        key={products._id}
        className="w-full flex flex-col items-center  bg-white border border-gray-200 rounded-lg shadow darkbg-gray-900 dark-border-gray-700"
      >
        <div className="w-full flex justify-center p-3">
          <img
            className=" object-cover w-16 h-16 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded "
            src={products.images[0]}
            alt="product image"
          />
        </div>
        <div className=" p-2 md:p-5 w-full flex flex-col justify-between">
          <h5 className=" text-center text-xs md:text-xl font-semibold line-clamp-1 tracking-tight text-gray-900 ">
            {products.title}
          </h5>

          <div className="flex flex-col sm:flex-row items-center mt-2.5 mb-5">
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${
                    index < Math.floor(parseFloat(products.average_rating))
                      ? "text-yellow-300"
                      : "text-gray-200"
                  } mr-1`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark-bg-blue-200 dark-text-blue-800 ml-3">
              {products.average_rating}
            </span>
          </div>
          <div className="flex  flex-col sm:flex-row items-center justify-between ">
            <div className="flex flex-col  items-center md:items-start">
              <span className=" text-xs md:text-sm line-through font-bold text-gray-900 dark-text-white">
                {`$${products.actual_price}`}{" "}
              </span>{" "}
              <span className=" text-xs  md:text-sm    font-bold p-1 rounded bg-blue-100 text-gray-800 dark-text-white">{`${products.discount}`}</span>
              <span className=" text-xs sm:text-sm md:text-xl py-1  font-bold text-gray-900 dark-text-white">{`$${products.selling_price}`}</span>
            </div>
            <button
              onClick={() => handleAddToCart(products)}
              data-popover-target="popover-default"
              type="button"
              disabl={isAddedToCart}
              className={`text-white text-xs sm:text-sm lg:text-lg ${
                isAddedToCart ? "bg-gray-500" : "bg-blue-700"
              } hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800`}
            >
              {showPopover ? "Added to cart" : buttonText}
            </button>
            <div
              data-popover
              id="popover-default"
              role="tooltip"
              className={`absolute z-10 ${
                showPopover ? "visible" : "invisible"
              } inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 dark:text-gray-400 dark-border-gray-600 dark:bg-gray-800`}
            >
              <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark-border-gray-600 dark:bg-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Product Added
                </h3>
              </div>
              <div className="px-3 py-2">
                <p>The product has been added to your cart.</p>
              </div>
              <div data-popper-arrow></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
