import React,{useState} from 'react';
import { useCart } from '../reducers/CartContext';

function ProductCard() {


  const products= [
    {
      "_id": "fa8e22d6-c0b6-5229-bb9e-ad52eda39a0a", 
      "actual_price": "2,999", 
      "average_rating": "3.9", 
      "brand": "York", 
      "category": "Clothing and Accessories", 
      "crawled_at": "02/10/2021, 20:11:51", 
      "description": "Yorker trackpants made from 100% rich combed cotton giving it a rich look.Designed for Comfort,Skin friendly fabric,itch-free waistband & great for all year round use Proudly made in India", 
      "discount": "69% off", 
      "images": [
          "https://rukminim1.flixcart.com/image/128/128/jr3t5e80/track-pant/z/y/n/m-1005combo2-yorker-original-imafczg3xfh5qqd4.jpeg?q=70", 
          "https://rukminim1.flixcart.com/image/128/128/jr58l8w0/track-pant/w/d/a/l-1005combo8-yorker-original-imafczg3pgtxgraq.jpeg?q=70"
      ], 
      "out_of_stock": false, 
      "pid": "TKPFCZ9EA7H5FYZH", 
      "product_details": [
          {
              "Style Code": "1005COMBO2"
          }, 
          {
              "Closure": "Elastic"
          }, 
          {
              "Pockets": "Side Pockets"
          }, 
          {
              "Fabric": "Cotton Blend"
          }, 
          {
              "Pattern": "Solid"
          }, 
          {
              "Color": "Multicolor"
          }
      ], 
      "seller": "Shyam Enterprises", 
      "selling_price": "921", 
      "sub_category": "Bottomwear", 
      "title": "Solid Men Multicolor Track Pants", 
      "url": "https://www.flipkart.com/yorker-solid-men-multicolor-track-pants/p/itmd2c76aadce459?pid=TKPFCZ9EA7H5FYZH&lid=LSTTKPFCZ9EA7H5FYZHVYXWP0&marketplace=FLIPKART&srno=b_1_1&otracker=browse&fm=organic&iid=177a46eb-d053-4732-b3de-fcad6ff59cbd.TKPFCZ9EA7H5FYZH.SEARCH&ssid=utkd4t3gb40000001612415717799"
  }, 
  {
      "_id": "893e6980-f2a0-531f-b056-34dd63fe912c", 
      "actual_price": "1,499", 
      "average_rating": "3.9", 
      "brand": "York", 
      "category": "Clothing and Accessories", 
      "crawled_at": "02/10/2021, 20:11:52", 
      "description": "Yorker trackpants made from 100% rich combed cotton giving it a rich look.Designed for Comfort,Skin friendly fabric,itch-free waistband & great for all year round use Proudly made in India", 
      "discount": "66% off", 
      "images": [
          "https://rukminim1.flixcart.com/image/128/128/kfyasnk0/track-pant/g/5/y/s-19876-yorker-original-imafwamyzrwjynkf.jpeg?q=70", 
          "https://rukminim1.flixcart.com/image/128/128/kfyasnk0/track-pant/g/5/y/s-19876-yorker-original-imafwamynyeuu5zq.jpeg?q=70"
      ], 
      "out_of_stock": false, 
      "pid": "TKPFCZ9EJZV2UVRZ", 
      "product_details": [
          {
              "Style Code": "1005BLUE"
          }, 
          {
              "Closure": "Drawstring, Elastic"
          }, 
          {
              "Pockets": "Side Pockets"
          }, 
          {
              "Fabric": "Cotton Blend"
          }, 
          {
              "Pattern": "Solid"
          }, 
          {
              "Color": "Blue"
          }
      ], 
      "seller": "Shyam Enterprises", 
      "selling_price": "499", 
      "sub_category": "Bottomwear", 
      "title": "Solid Men Blue Track Pants", 
      "url": "https://www.flipkart.com/yorker-solid-men-blue-track-pants/p/itmfczez7v6rzwer?pid=TKPFCZ9EJZV2UVRZ&lid=LSTTKPFCZ9EJZV2UVRZ9HEITU&marketplace=FLIPKART&srno=b_1_2&otracker=browse&fm=organic&iid=177a46eb-d053-4732-b3de-fcad6ff59cbd.TKPFCZ9EJZV2UVRZ.SEARCH&ssid=utkd4t3gb40000001612415717799"
  }, 
  {
      "_id": "eb4c8eab-8206-59d0-bcd1-a724d96bf74f", 
      "actual_price": "2,999", 
      "average_rating": "3.9", 
      "brand": "York", 
      "category": "Clothing and Accessories", 
      "crawled_at": "02/10/2021, 20:11:52", 
      "description": "Yorker trackpants made from 100% rich combed cotton giving it a rich look.Designed for Comfort,Skin friendly fabric,itch-free waistband & great for all year round use Proudly made in India", 
      "discount": "68% off", 
      "images": [
          "https://rukminim1.flixcart.com/image/128/128/jr3t5e80/track-pant/e/c/s/xl-1005combo4-yorker-original-imafczgcc8t8uppk.jpeg?q=70", 
          "https://rukminim1.flixcart.com/image/128/128/jr58l8w0/track-pant/f/s/v/m-1005combo9-yorker-original-imafczez7buydy6r.jpeg?q=70"
      ], 
      "out_of_stock": false, 
      "pid": "TKPFCZ9EHFCY5Z4Y", 
      "product_details": [
          {
              "Style Code": "1005COMBO4"
          }, 
          {
              "Closure": "Elastic"
          }, 
          {
              "Pockets": "Side Pockets"
          }, 
          {
              "Fabric": "Cotton Blend"
          }, 
          {
              "Pattern": "Solid"
          }, 
          {
              "Color": "Multicolor"
          }
      ], 
      "seller": "Shyam Enterprises", 
      "selling_price": "931", 
      "sub_category": "Bottomwear", 
      "title": "Solid Men Multicolor Track Pants", 
      "url": "https://www.flipkart.com/yorker-solid-men-multicolor-track-pants/p/itm1eee3ca648155?pid=TKPFCZ9EHFCY5Z4Y&lid=LSTTKPFCZ9EHFCY5Z4YDOVNQS&marketplace=FLIPKART&srno=b_1_3&otracker=browse&fm=organic&iid=177a46eb-d053-4732-b3de-fcad6ff59cbd.TKPFCZ9EHFCY5Z4Y.SEARCH&ssid=utkd4t3gb40000001612415717799"
  }
  ];


  const { dispatch } = useCart();

  const [selectedItems, setSelectedItems] = useState([]);
  
  const handleAddToCart = (product) => {
    // Add the selected product to the local state
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, product]);

    // You can also add it to the cart by dispatching an action
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product._id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark-border-gray-700">
          <a href={product.url}>
            <img className="p-8 rounded-t-lg" src={product.images[0]} alt="product image" />
          </a>
          <div className="px-5 pb-5">
            <a href={product.url}>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${index < Math.floor(parseFloat(product.average_rating)) ? 'text-yellow-300' : 'text-gray-200'} mr-1`}
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
                {product.average_rating}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark-text-white">{`$${product.selling_price}`}</span>
              <button
                onClick={() => handleAddToCart(product)}
                className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
