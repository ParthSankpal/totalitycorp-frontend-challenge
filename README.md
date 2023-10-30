# E-Commerce Product Listing and Shopping Cart Application


This is a sample e-commerce application built using React, designed to display a list of products and manage a shopping cart. It allows users to browse products, filter them by category, price range, and average ratings, and add products to their cart.

# Features
Product Listing: Display a list of products with details such as title, images, price, and average ratings.

Category Filtering: Users can filter products by category to find items in specific categories.

Price Range Filtering: Filter products based on price ranges, with options for different price brackets.

Rating Filtering: Filter products based on their average ratings.

Shopping Cart: Users can add products to their shopping cart. The application includes features for adding, removing, and adjusting the quantity of items in the cart.

# Components
The application is built using several React components:

ProductCard: Renders individual product cards with details and an "Add to Cart" button.

ProductList: Displays the list of products, handles filtering, and communicates with the Cart component.

CartProvider: Manages the state of the shopping cart using a context and provides this state to the application.

CartContext: A context for sharing cart-related data and dispatching actions for updating the cart.

# How to Run
Clone this repository.
Navigate to the project directory.
Run npm install to install dependencies.
Run npm start to start the development server.
Open your web browser and access http://localhost:3000 to view the application.


# Technologies Used
React: A popular JavaScript library for building user interfaces.
React Context API: Used for managing the shopping cart state.
HTML and CSS TailwindCSS: For structuring and styling the application.
Contributing
Contributions to this project are welcome! If you have any ideas for improvements or would like to fix issues, please feel free to open a pull request.
