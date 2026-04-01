import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import productsData from './data/products.json';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import StatsBar from './components/StatsBar';
import TabButtons from './components/TabButtons';
import ProductsSection from './components/ProductsSection';
import CartSection from './components/CartSection';
import StepsSection from './components/StepsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);

  const products = productsData;

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      toast.info(`${product.name} is already in the cart!`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`✅ ${product.name} added to cart!`);
  };

  const removeFromCart = (id) => {
    const product = cart.find(item => item.id === id);
    setCart(cart.filter(item => item.id !== id));
    if (product) toast.error(`🗑️ ${product.name} removed from cart`);
  };

  const proceedToCheckout = () => {
    if (cart.length === 0) return;
    toast.success(`🎉 Thank you! ${cart.length} item${cart.length > 1 ? 's' : ''} purchased successfully!`, {
      autoClose: 4000,
    });
    setCart([]);
    setActiveTab('products');
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar totalItems={totalItems} setActiveTab={setActiveTab} />
      <Banner />
      <StatsBar />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <TabButtons 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          totalItems={totalItems} 
        />

        {activeTab === 'products' && (
          <ProductsSection products={products} addToCart={addToCart} />
        )}

        {activeTab === 'cart' && (
          <CartSection 
            cart={cart} 
            removeFromCart={removeFromCart} 
            proceedToCheckout={proceedToCheckout} 
            totalPrice={totalPrice} 
          />
        )}
      </div>

      <StepsSection />
      <PricingSection />
      <Footer />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;