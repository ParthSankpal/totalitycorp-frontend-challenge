import React, {useState, useEffect} from "react";
import ProductCard from "./ProductCard";
import {BsFillDiagram2Fill, BsBellFill,BsFillCaretDownFill } from "react-icons/bs";
import {IoPricetags} from 'react-icons/io5';
import {GiStarsStack} from 'react-icons/gi'


const products = [
  {
    _id: "fa8e22d6-c0b6-5229-bb9e-ad52eda39a0a",
    actual_price: "2,999",
    average_rating: "3.9",
    brand: "York",
    category: "Clothing and Accessories",
    crawled_at: "02/10/2021, 20:11:51",
    description:
      "Yorker trackpants made from 100% rich combed cotton giving it a rich look.Designed for Comfort,Skin friendly fabric,itch-free waistband & great for all year round use Proudly made in India",
    discount: "69% off",
    images: [
      "https://rukminim1.flixcart.com/image/128/128/jr3t5e80/track-pant/z/y/n/m-1005combo2-yorker-original-imafczg3xfh5qqd4.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/jr58l8w0/track-pant/w/d/a/l-1005combo8-yorker-original-imafczg3pgtxgraq.jpeg?q=70",
    ],
    out_of_stock: false,
    pid: "TKPFCZ9EA7H5FYZH",
    product_details: [
      {
        "Style Code": "1005COMBO2",
      },
      {
        Closure: "Elastic",
      },
      {
        Pockets: "Side Pockets",
      },
      {
        Fabric: "Cotton Blend",
      },
      {
        Pattern: "Solid",
      },
      {
        Color: "Multicolor",
      },
    ],
    seller: "Shyam Enterprises",
    selling_price: "921",
    sub_category: "Bottomwear",
    title: "Solid Men Multicolor Track Pants",
    url: "https://www.flipkart.com/yorker-solid-men-multicolor-track-pants/p/itmd2c76aadce459?pid=TKPFCZ9EA7H5FYZH&lid=LSTTKPFCZ9EA7H5FYZHVYXWP0&marketplace=FLIPKART&srno=b_1_1&otracker=browse&fm=organic&iid=177a46eb-d053-4732-b3de-fcad6ff59cbd.TKPFCZ9EA7H5FYZH.SEARCH&ssid=utkd4t3gb40000001612415717799",
  },
  {
    _id: "fa8e22d6-c0b6-5229-bb9e-ad52eda39acd",
    actual_price: "2,999",
    average_rating: "3.9",
    brand: "York",
    category: "Clothing and Accessories",
    crawled_at: "02/10/2021, 20:11:51",
    description:
      "Yorker trackpants made from 100% rich combed cotton giving it a rich look.Designed for Comfort,Skin friendly fabric,itch-free waistband & great for all year round use Proudly made in India",
    discount: "69% off",
    images: [
      "https://rukminim1.flixcart.com/image/128/128/jr3t5e80/track-pant/z/y/n/m-1005combo2-yorker-original-imafczg3xfh5qqd4.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/jr58l8w0/track-pant/w/d/a/l-1005combo8-yorker-original-imafczg3pgtxgraq.jpeg?q=70",
    ],
    out_of_stock: false,
    pid: "TKPFCZ9EA7H5FYZH",
    product_details: [
      {
        "Style Code": "1005COMBO2",
      },
      {
        Closure: "Elastic",
      },
      {
        Pockets: "Side Pockets",
      },
      {
        Fabric: "Cotton Blend",
      },
      {
        Pattern: "Solid",
      },
      {
        Color: "Multicolor",
      },
    ],
    seller: "Shyam Enterprises",
    selling_price: "921",
    sub_category: "Bottomwear",
    title: "Solid Men Multicolor Track Pants",
    url: "https://www.flipkart.com/yorker-solid-men-multicolor-track-pants/p/itmd2c76aadce459?pid=TKPFCZ9EA7H5FYZH&lid=LSTTKPFCZ9EA7H5FYZHVYXWP0&marketplace=FLIPKART&srno=b_1_1&otracker=browse&fm=organic&iid=177a46eb-d053-4732-b3de-fcad6ff59cbd.TKPFCZ9EA7H5FYZH.SEARCH&ssid=utkd4t3gb40000001612415717799",
  },
  {
    _id: "893e6980-f2a0-531f-b056-34dd63fe912c",
    actual_price: "1,499",
    average_rating: "4.5",
    brand: "York",
    category: "Mobiles & Accessories",
    crawled_at: "02/10/2021, 20:11:52",
    description:
      "Yorker trackpants made from 100% rich combed cotton giving it a rich look.Designed for Comfort,Skin friendly fabric,itch-free waistband & great for all year round use Proudly made in India",
    discount: "66% off",
    images: [
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/x/9/-original-imaggsudg5fufyte.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/x/9/-original-imaggsudg5fufyte.jpeg?q=70",
    ],
    out_of_stock: false,
    pid: "TKPFCZ9EJZV2UVRZ",
    product_details: [
      {
        "Style Code": "1005BLUE",
      },
      {
        Closure: "Drawstring, Elastic",
      },
      {
        Pockets: "Side Pockets",
      },
      {
        Fabric: "Cotton Blend",
      },
      {
        Pattern: "Solid",
      },
      {
        Color: "Blue",
      },
    ],
    seller: "Shyam Enterprises",
    selling_price: "499",
    sub_category: "Bottomwear",
    title: "Google Pixel 7 (Snow, 128 GB)  (8 GB RAM)",
    url: "https://www.flipkart.com/yorker-solid-men-blue-track-pants/p/itmfczez7v6rzwer?pid=TKPFCZ9EJZV2UVRZ&lid=LSTTKPFCZ9EJZV2UVRZ9HEITU&marketplace=FLIPKART&srno=b_1_2&otracker=browse&fm=organic&iid=177a46eb-d053-4732-b3de-fcad6ff59cbd.TKPFCZ9EJZV2UVRZ.SEARCH&ssid=utkd4t3gb40000001612415717799",
  },
  {
    _id: "893e6980-f2a0-531f-b056-34dd63fe912e",
    actual_price: "1,499",
    average_rating: "4.9",
    brand: "York",
    category: "Mobiles & Accessories",
    crawled_at: "02/10/2021, 20:11:52",
    description:
      "Yorker trackpants made from 100% rich combed cotton giving it a rich look.Designed for Comfort,Skin friendly fabric,itch-free waistband & great for all year round use Proudly made in India",
    discount: "66% off",
    images: [
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/1/o/-original-imagmg6gz3bsgan7.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/1/o/-original-imagmg6gz3bsgan7.jpeg?q=70",
    ],
    out_of_stock: false,
    pid: "TKPFCZ9EJZV2UVRZ",
    product_details: [
      {
        "Style Code": "1005BLUE",
      },
      {
        Closure: "Drawstring, Elastic",
      },
      {
        Pockets: "Side Pockets",
      },
      {
        Fabric: "Cotton Blend",
      },
      {
        Pattern: "Solid",
      },
      {
        Color: "Blue",
      },
    ],
    seller: "Shyam Enterprises",
    selling_price: "499",
    sub_category: "Bottomwear",
    title: "SAMSUNG Galaxy S23 Ultra 5G (Cream, 256 GB)  (12 GB RAM)",
    url: "https://www.flipkart.com/yorker-solid-men-blue-track-pants/p/itmfczez7v6rzwer?pid=TKPFCZ9EJZV2UVRZ&lid=LSTTKPFCZ9EJZV2UVRZ9HEITU&marketplace=FLIPKART&srno=b_1_2&otracker=browse&fm=organic&iid=177a46eb-d053-4732-b3de-fcad6ff59cbd.TKPFCZ9EJZV2UVRZ.SEARCH&ssid=utkd4t3gb40000001612415717799",
  },
  {
    _id: "eb4c8eab-8206-59d0-bcd1-a724d96bf74f",
    actual_price: "2,999",
    average_rating: "3.9",
    brand: "York",
    category: "Clothing and Accessories",
    crawled_at: "02/10/2021, 20:11:52",
    description:
      "Yorker trackpants made from 100% rich combed cotton giving it a rich look.Designed for Comfort,Skin friendly fabric,itch-free waistband & great for all year round use Proudly made in India",
    discount: "68% off",
    images: [
      "https://rukminim1.flixcart.com/image/128/128/jr3t5e80/track-pant/e/c/s/xl-1005combo4-yorker-original-imafczgcc8t8uppk.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/128/128/jr58l8w0/track-pant/f/s/v/m-1005combo9-yorker-original-imafczez7buydy6r.jpeg?q=70",
    ],
    out_of_stock: false,
    pid: "TKPFCZ9EHFCY5Z4Y",
    product_details: [
      {
        "Style Code": "1005COMBO4",
      },
      {
        Closure: "Elastic",
      },
      {
        Pockets: "Side Pockets",
      },
      {
        Fabric: "Cotton Blend",
      },
      {
        Pattern: "Solid",
      },
      {
        Color: "Multicolor",
      },
    ],
    seller: "Shyam Enterprises",
    selling_price: "931",
    sub_category: "Bottomwear",
    title: "Solid Men Multicolor Track Pants",
    url: "https://www.flipkart.com/yorker-solid-men-multicolor-track-pants/p/itm1eee3ca648155?pid=TKPFCZ9EHFCY5Z4Y&lid=LSTTKPFCZ9EHFCY5Z4YDOVNQS&marketplace=FLIPKART&srno=b_1_3&otracker=browse&fm=organic&iid=177a46eb-d053-4732-b3de-fcad6ff59cbd.TKPFCZ9EHFCY5Z4Y.SEARCH&ssid=utkd4t3gb40000001612415717799",
  },
];

const categories = [...new Set(products.map((product) => product.category))];

// Function to dynamically calculate price ranges based on product prices
const calculatePriceRanges = (products) => {
    const priceArray = products.map((product) => parseFloat(product.actual_price.replace(/[^0-9.]/g, "")));
    const minPrice = Math.min(...priceArray);
    const maxPrice = Math.max(...priceArray);
  
    const rangeSize = 200; // You can adjust this to your desired range size
    const priceRanges = ["All Prices"];
  
    for (let i = minPrice; i <= maxPrice; i += rangeSize) {
      const min = i;
      const max = i + rangeSize - 1;
      priceRanges.push(`$${min} - $${max}`);
    }
  
    priceRanges.push(`Over $${maxPrice}`);
  
    return priceRanges;
  };
  
  const priceRanges = calculatePriceRanges(products);



  // Function to dynamically calculate rating ranges based on product ratings
const calculateRatingRanges = (products) => {
    const ratingArray = products.map((product) => parseFloat(product.average_rating));
    const minRating = Math.min(...ratingArray);
    const maxRating = Math.max(...ratingArray);

    const step = 1; // You can adjust this to your desired step size
    const ratingRanges = ["All Ratings", "1", "2"];

    for (let rating = minRating; rating <= maxRating; rating += step) {
        ratingRanges.push(rating.toFixed(1));
    }

    return ratingRanges;
};

const ratingRanges = calculateRatingRanges(products);



  
// console.log(categories);

const ProductList = ({ selectedCategory, onCategoryChange }) => {
    const [isSideBarCategoryDropdownVisible, setIsSideBarCategoryDropdownVisible] = useState(false);

    const [isSideBarPriceDropdownVisible, setIsSideBarPriceDropdownVisible] = useState(false);

    const [isSidebarRatingDropdownVisible, setIsSidebarRatingDropdownVisible] = useState(false);

    const [currentCategory, setCurrentCategory] = useState(selectedCategory);

    const [selectedPriceRange, setSelectedPriceRange] = useState("All Prices");

    const [selectedRatingRange, setSelectedRatingRange] = useState("All Ratings");
  
    useEffect(() => {
      setCurrentCategory(selectedCategory);
    }, [selectedCategory]);
  
    const handleSideBarCategoryDropdownHover = () => {
      setIsSideBarCategoryDropdownVisible(!isSideBarCategoryDropdownVisible);
    };
  
    const handleSideBarPriceDropdownHover = () => {
      setIsSideBarPriceDropdownVisible(!isSideBarPriceDropdownVisible);
    };
  
    const handelSidebarRatingDropdownHover = () => {
        setIsSidebarRatingDropdownVisible(!isSidebarRatingDropdownVisible);
    };

    const handleCategoryClick = (category) => {
      setIsSideBarCategoryDropdownVisible(false);
      setCurrentCategory(category);
      onCategoryChange(category);
    };
  
    const handlePriceFilterSelect = (price) => {
        setIsSideBarPriceDropdownVisible(false);
        
        // Parse the selected price range
        if (price === "All Prices") {
          // Reset the price range filter
          setSelectedPriceRange({
            minPrice: 0,
            maxPrice: Infinity,
          });
        } else {
          const [minPrice, maxPrice] = price.split(" - ");
          setSelectedPriceRange({
            minPrice: parseInt(minPrice.replace(/\D/g, '')), // Parse and remove non-digit characters
            maxPrice: parseInt(maxPrice.replace(/\D/g, '')), // Parse and remove non-digit characters
          });
        }
        console.log(price);
      };


      const handleRatingFilterSelect = (rating) => {
        setIsSidebarRatingDropdownVisible(false);
        
        // Parse the selected rating range
        if (rating === "All Ratings") {
            // Reset the rating range filter
            setSelectedRatingRange("All Ratings");
        } else {
            // Parse the selected rating
            setSelectedRatingRange(parseFloat(rating));
        }
        console.log("Raings selected"+rating);
    };
      
    
      const filteredProducts = products.filter((product) => {
        const isCategoryMatch = currentCategory === "All" || product.category === currentCategory;
        const isPriceRangeMatch = selectedPriceRange === "All Prices" || (
          parseFloat(product.actual_price.replace(/[^0-9.]/g, "")) >= selectedPriceRange.minPrice &&
          parseFloat(product.actual_price.replace(/[^0-9.]/g, "")) <= selectedPriceRange.maxPrice
        );
        const isRatingMatch = selectedRatingRange === "All Ratings" || parseFloat(product.average_rating) === selectedRatingRange;
        return isCategoryMatch && isPriceRangeMatch && isRatingMatch;
      });
    


  return (
    <div className=" md:flex dark:bg-gray-800">
        <aside
        id="sidebar-multi-level-sidebar"
        class="   relative"
        aria-label="Sidebar"
      >
        <div class=" px-3 py-4 border border-s-slate-200 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <ul class="space-y-2 overflow-hidden font-medium flex md:flex-col justify-between align-middle items-center">
            
            <li className=" w-full ">
            <button
                type="button"
                className="flex items-center w-full align-middle gap-1 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover-bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={handleSideBarCategoryDropdownHover}
              >
                <BsFillDiagram2Fill />
                <span className="flex-1  text-left whitespace-nowrap">Categories</span>
                {isSideBarCategoryDropdownVisible ? (
                  <BsFillCaretDownFill className="origin-center rotate-180 duration-500" />
                ) : (
                  <BsFillCaretDownFill className="origin-center rotate-0 duration-500" />
                )}
              </button>
              {isSideBarCategoryDropdownVisible && (
                <div className="mt-2 absolute top-15  z-40 space-y-2 rounded md:w-[87%] bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                  <button
                    className="block w-full px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover-bg-gray-700"
                    onClick={() => handleCategoryClick("All")}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="block w-full px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover-bg-gray-700"
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </li>
            <li className=" w-full">
              <button
                type="button"
                className="flex items-center w-full align-middle gap-1 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover-bg-gray-700"
                aria-controls="price-dropdown"
                data-collapse-toggle="price-dropdown"
                onClick={handleSideBarPriceDropdownHover}
              >
                <IoPricetags />
                <span className="flex-1  text-left whitespace-nowrap">Price Range</span>
                {isSideBarPriceDropdownVisible ? (
                  <BsFillCaretDownFill className="origin-center rotate-180 duration-500" />
                ) : (
                  <BsFillCaretDownFill className="origin-center rotate-0 duration-500" />
                )}
              </button>
              {isSideBarPriceDropdownVisible && (
                <div className="mt-2 absolute top-30 z-40 space-y-2 rounded md:w-[87%] bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                  {priceRanges.map((priceRange) => (
                    <button
                      key={priceRange}
                      className="block w-full px-4 py-2 text-gray-900 hover-bg-gray-100 dark:text-white dark:hover-bg-gray-700"
                      onClick={() => handlePriceFilterSelect(priceRange)}
                    >
                      {priceRange}
                    </button>
                  ))}
                </div>
              )}
            </li>
            <li className=" w-full ">
              <button
                type="button"
                className="flex items-center w-full align-middle gap-1 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover-bg-gray-700"
                aria-controls="price-dropdown"
                data-collapse-toggle="price-dropdown"
                onClick={handelSidebarRatingDropdownHover}
              >
                <GiStarsStack />
                <span className="flex-1  text-left whitespace-nowrap">Ratings</span>
                {isSidebarRatingDropdownVisible ? (
                  <BsFillCaretDownFill className="origin-center rotate-180 duration-500" />
                ) : (
                  <BsFillCaretDownFill className="origin-center rotate-0 duration-500" />
                )}
              </button>
              {isSidebarRatingDropdownVisible && (
                <div className="mt-2 absolute top-50 z-40 space-y-2 rounded md:w-[87%] bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                  {ratingRanges.map((ratingRange) => (
                    <button
                      key={ratingRange}
                      className="block w-full px-4 py-2 text-gray-900 hover-bg-gray-100 dark:text-white dark:hover-bg-gray-700"
                      onClick={() => handleRatingFilterSelect(ratingRange)}
                    >
                       {ratingRange}
                    </button>
                  ))}
                </div>
              )}
            </li>
            <li  className=" w-full ">
              <a
                href="#"
                class="flex items-center w-full align-middle gap-1 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover-bg-gray-700 md:px-5"
              >
                <BsBellFill/>
                <span class="flex-1  whitespace-nowrap">Inbox</span>
                <span class="inline-flex items-center justify-center w-3 h-3 p-3  text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
      
            
          </ul>
        </div>
      </aside>
    <div className=" max-h-[35%vh]  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 bg-white  dark:bg-gray-800 dark-border-gray-700">

      {filteredProducts.map((product) => {
        {
          /* console.log("Rendering product with ID:", product._id); */
        }
        return <ProductCard key={product._id} products={product} />;
      })}
    </div>
    </div>
  );
};

export default ProductList;
export { categories };
