import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import ProductCard  from './components/ProductCard';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import { CartProvider } from './reducers/CartContext'; // Make sure this import is correct
import Sidebar from './components/Sidebar';

function App() {

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };


  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange}/>
          {/* <Sidebar/> */}
          <Routes>
            <Route path="/" element={<ProductList selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange}/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
