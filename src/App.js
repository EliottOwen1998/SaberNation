import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Contact from './pages/Contact';
import MeetTheTeam from './pages/MeetTheTeam';
import CustomerReview from './pages/Reviews';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import './assets/styles/index.css';
import BlogPage from './pages/blog';
import MemeGenerator from './components/memeGenerator';

function App() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <Router>
      <Header cart={cart} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route
            path="/product/:id"
            element={<ProductDetailsPage addToCart={addToCart} />}
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/meetTheTeam" element={<MeetTheTeam />} />
          <Route path="/reviews" element={<CustomerReview />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;


