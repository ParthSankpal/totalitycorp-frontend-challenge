import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { categories } from "./ProductList";
import BuyOn from "../assets/BuyOn.png";

const Navbar = ({ onCategoryChange }) => {
  // console.log(ProductCard.categories);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] =
    useState(false); // New state for the category dropdown

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle category dropdown visibility on hover
  const handleCategoryDropdownHover = () => {
    setIsCategoryDropdownVisible(!isCategoryDropdownVisible);
  };

  return (
    <>
      <nav className=" sticky w-full  bg-white border-gray-200 dark:bg-gray-900">
        <div className="mx-auto p-4">
          <div className="flex">
            <div className=" flex justify-between md:justify-normal w-full md:w-1/3">
            <Link to="/" href="https://flowbite.com/" className=" md:w-1/3 flex items-center">
              <img src={BuyOn} className="h-8 mr-3" alt="BuyOn" />
              {/* <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
                BuyOn
              </span> */}
            </Link>

            <button
                data-collapse-toggle="navbar-search"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"

                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`  ${
                isMobileMenuOpen ? " absolute top-16 left-0 z-50  bg-gray-900 rounded" : "hidden"
              }  md:static   md:flex  items-center justify-between w-full md:w-2/3 `}
            >
              <div className="flex  ">
                {/* <button
                  type="button"
                  data-collapse-toggle="navbar-search"
                  aria-controls="navbar-search"
                  aria-expanded="false"
                  className="  inline-flex items-center p-2 w-10 h-10 justify-center text-white text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">
                    {" "}
                    {selectedCategory !== "All" ? selectedCategory : "Search"}
                  </span>
                </button> */}
                <div
                  className="relative  md:flex  "
                  onClick={handleCategoryDropdownHover}
                >
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="w-full lg:w-[170%] p-2 z-50 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {isCategoryDropdownVisible && (
                    <div className="absolute top-10 mt-2 space-y-2 rounded w-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                      <button
                        className=" w-full px-4 py-2 text-gray-900  dark:bg-gray-800 dark:text-white "
                        onClick={() => onCategoryChange("All")}
                      >
                        All
                      </button>
                      {categories.map((category) => (
                        <button
                          key={category}
                          className="block w-full px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:hover-bg-gray-700"
                          onClick={() => onCategoryChange(category)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className={` md:flex md:w-auto" id="navbar-default`}>
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link
                      to="/"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cart"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="flex align-middle items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      <BsFillPersonFill /> Profile
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
