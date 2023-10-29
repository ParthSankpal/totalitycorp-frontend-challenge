import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  // Sample product data
  const products = [
    {
      "_id": "fa8e22d6-c0b6-5229-bb9e-ad52eda39a0a",
      "actual_price": "2,999",
      "average_rating": "3.9",
      "brand": "York",
      "category": "Clothing and Accessories",
      "crawled_at": "02/10/2021, 20:11:51",
      "description": "Yorker trackpants made from 100% rich combed cotton giving it a rich look. Designed for Comfort, Skin-friendly fabric, itch-free waistband & great for all year round use. Proudly made in India",
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
        }
      ],
      "seller": "Shyam Enterprises",
      "selling_price": "921",
      "sub_category": "Bottomwear",
      "title": "Solid Men Multicolor Track Pants",
      "url": "https://www.flipkart.com/yorker-solid-men-multicolor-track-pants/p/itmd2c76aadce459?pid=TKPFCZ9EA7H5FYZH&lid=LSTTKPFCZ9EA7H5FYZHVYXWP0&marketplace=FLIPKART&srno=b_1_1&otracker=browse&fm=organic&iid=177a46eb-d053-4732-b3de-fcad6ff59cbd.TKPFCZ9EA7H5FYZH.SEARCH&ssid=utkd4t3gb40000001612415717799"
    },
    {
      "_id": "fa8e22d6-c0b6-5229-bb9e-ad52eda39a0b",
      "actual_price": "2,999",
      "average_rating": "3.9",
      "brand": "York",
      "category": "Clothing and Accessories",
      "crawled_at": "02/10/2021, 20:11:51",
      "description": "Yorker trackpants made from 100% rich combed cotton giving it a rich look. Designed for Comfort, Skin-friendly fabric, itch-free waistband & great for all year round use. Proudly made in India",
      "discount": "69% off",
      "images": [
        "https://rukminim1.flixcart.com/image/128/128/jr3t5e80/track-pant/z/y/n/m-1005combo2-yorker-original-imafczg3xfh5qqd4.jpeg?q=70",
        "https://rukminim1flixcart.com/image/128/128/jr58l8w0/track-pant/w/d/a/l-1005combo8-yorker-original-imafczg3pgtxgraq.jpeg?q=70"
      ],
      "out_of_stock": false,
      "pid": "TKPFCZ9EA7H5FYZH",
      "product_details": [
        {
          "Style Code": "1005COMBO2"
        },
        {
          "Closure": "Elastic"
        }
      ],
      "seller": "Shyam Enterprises",
      "selling_price": "921",
      "sub_category": "Bottomwear",
      "title": "Solid Men Multicolor Track Pants",
      "url": "https://www.flipkart.com/yorker-solid-men-multicolor-track-pants/p/itmd2c76aadce459?pid=TKPFCZ9EA7H5FYZH&lid=LSTTKPFCZ9EA7H5FYZHVYXWP0&marketplace=FLIPKART&srno=b_1_1&otracker=browse&fm=organic&iid=177a46eb-d053-4732-b3de-fcad6ff59cbd.TKPFCZ9EA7H5FYZH.SEARCH&ssid=utkd4t3gb40000001612415717799"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
