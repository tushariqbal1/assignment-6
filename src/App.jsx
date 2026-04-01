import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  FaCheckCircle,
  FaInfoCircle,
  FaTrash,
  FaShoppingBag
} from "react-icons/fa";

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

  // ✅ Add to Cart
  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      toast.info(
        <span className="flex items-center gap-2">
          <FaInfoCircle className="text-blue-500" />
          {product.name} is already in the cart!
        </span>
      );
      return;
    }

    setCart([...cart, product]);

    toast.success(
      <span className="flex items-center gap-2">
        <FaCheckCircle className="text-green-500" />
        {product.name} added to cart!
      </span>
    );
  };

  // ✅ Remove from Cart
  const removeFromCart = (id) => {
    const product = cart.find(item => item.id === id);
    setCart(cart.filter(item => item.id !== id));

    if (product) {
      toast.error(
        <span className="flex items-center gap-2">
          <FaTrash className="text-red-500" />
          {product.name} removed from cart
        </span>
      );
    }
  };

  // ✅ Checkout
  const proceedToCheckout = () => {
    if (cart.length === 0) return;

    toast.success(
      <span className="flex items-center gap-2">
        <FaShoppingBag className="text-purple-500" />
        Thank you! {cart.length} item{cart.length > 1 ? 's' : ''} purchased successfully!
      </span>,
      {
        autoClose: 4000,
      }
    );

    setCart([]);
    setActiveTab('products');
  };

  const totalItems = cart.length;
  // const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

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
          <ProductsSection
            products={products}
            addToCart={addToCart}
          />
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

      {/* ✅ Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
      />
    </div>
  );
}

export default App;