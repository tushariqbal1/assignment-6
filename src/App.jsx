import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import productsData from './data/products.json';

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
    if (product) {
      toast.error(`🗑️ ${product.name} removed from cart`);
    }
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
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🚀</span>
            <h1 className="text-3xl font-bold text-purple-600 tracking-tight">DigiTools</h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-purple-600 transition-colors">Products</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Features</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Pricing</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Testimonials</a>
            <a href="#" className="hover:text-purple-600 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium px-4 py-2 transition-colors">
              <span>👤</span> Login
            </button>
            <button className="btn btn-primary px-8 py-2.5 text-base font-semibold rounded-full shadow-md hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-violet-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-6xl font-bold leading-tight mb-6">
              Supercharge Your<br />Digital Workflow
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-lg">
              Premium digital tools to boost your productivity and creativity
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary text-lg px-10 py-3">Get Started Free</button>
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-700 text-lg px-10 py-3">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/20">
              <div className="text-7xl mb-6">✨</div>
              <p className="text-2xl font-light">Join <span className="font-semibold">50,000+</span> professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-purple-700 py-10 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold">50K+</div>
            <div className="text-purple-200 mt-2">Happy Users</div>
          </div>
          <div>
            <div className="text-5xl font-bold">200+</div>
            <div className="text-purple-200 mt-2">Tools & Templates</div>
          </div>
          <div>
            <div className="text-5xl font-bold">4.9</div>
            <div className="text-purple-200 mt-2">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Premium Digital Tools Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Premium Digital Tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-8 pb-4 flex justify-between items-start">
                <div className="text-5xl">{product.icon}</div>
                {product.tag && (
                  <div className={`px-4 py-1 text-xs font-medium rounded-full
                    ${product.tagType === 'best-seller' ? 'bg-amber-100 text-amber-700' :
                      product.tagType === 'popular' ? 'bg-purple-100 text-purple-700' :
                      product.tagType === 'new' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
                    {product.tag}
                  </div>
                )}
              </div>
              <div className="px-8 pb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 min-h-[60px]">
                  {product.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                  <span className="text-gray-500 text-lg">/{product.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5 text-lg">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-2xl transition-all duration-200 active:scale-95"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Get Started In 3 Steps */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white border border-gray-100 rounded-3xl p-10 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Get Started In 3 Steps</h2>
            <p className="text-gray-600 text-lg">Start using premium digital tools in minutes, not hours.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="mx-auto mb-6 w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center text-4xl transition-transform group-hover:scale-110">👤</div>
              <div className="inline-flex items-center justify-center w-8 h-8 bg-purple-600 text-white text-sm font-bold rounded-full mb-4">01</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Create Account</h3>
              <p className="text-gray-600 leading-relaxed">Sign up for free in seconds. No credit card required to get started.</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto mb-6 w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center text-4xl transition-transform group-hover:scale-110">📦</div>
              <div className="inline-flex items-center justify-center w-8 h-8 bg-purple-600 text-white text-sm font-bold rounded-full mb-4">02</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Choose Products</h3>
              <p className="text-gray-600 leading-relaxed">Browse our catalog and select the tools that fit your needs.</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto mb-6 w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center text-4xl transition-transform group-hover:scale-110">🚀</div>
              <div className="inline-flex items-center justify-center w-8 h-8 bg-purple-600 text-white text-sm font-bold rounded-full mb-4">03</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Start Creating</h3>
              <p className="text-gray-600 leading-relaxed">Download and start using your premium tools immediately.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter, Pro, Enterprise plans - আগের কোড রাখা আছে */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all">
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">Starter</h3>
            <p className="text-gray-500 mb-6">Perfect for getting started</p>
            <div className="mb-8">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-gray-500">/Month</span>
            </div>
            <ul className="space-y-4 mb-10 text-gray-700">
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Access to 10 free tools</li>
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Basic templates</li>
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Community support</li>
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> 1 project per month</li>
            </ul>
            <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-2xl transition-all">
              Get Started Free
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-violet-600 text-white rounded-3xl p-8 border-2 border-purple-400 relative scale-105 shadow-2xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-6 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="text-3xl font-bold mb-1">Pro</h3>
            <p className="opacity-90 mb-6">Best for professionals</p>
            <div className="mb-8">
              <span className="text-5xl font-bold">$29</span>
              <span className="opacity-80">/Month</span>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3"><span className="text-green-300">✓</span> Access to all premium tools</li>
              <li className="flex items-center gap-3"><span className="text-green-300">✓</span> Unlimited templates</li>
              <li className="flex items-center gap-3"><span className="text-green-300">✓</span> Priority support</li>
              <li className="flex items-center gap-3"><span className="text-green-300">✓</span> Unlimited projects</li>
              <li className="flex items-center gap-3"><span className="text-green-300">✓</span> Cloud sync</li>
              <li className="flex items-center gap-3"><span className="text-green-300">✓</span> Advanced analytics</li>
            </ul>
            <button className="w-full py-4 bg-white text-purple-700 font-semibold rounded-2xl hover:bg-gray-100 transition-all">
              Start Pro Trial
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all">
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">Enterprise</h3>
            <p className="text-gray-500 mb-6">For teams and businesses</p>
            <div className="mb-8">
              <span className="text-5xl font-bold">$99</span>
              <span className="text-gray-500">/Month</span>
            </div>
            <ul className="space-y-4 mb-10 text-gray-700">
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Everything in Pro</li>
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Team collaboration</li>
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Custom integrations</li>
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Dedicated support</li>
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> SLA guarantee</li>
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Custom branding</li>
            </ul>
            <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-2xl transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Ready To Transform Your Workflow + Footer */}
      <footer>
        {/* Top Purple Section */}
        <div className="bg-gradient-to-r from-purple-600 to-violet-600 py-20 text-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-4">Ready To Transform Your Workflow?</h2>
            <p className="text-lg opacity-90 mb-10">
              Join thousands of professionals who are already using DigiTools to work smarter.<br />
              Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setActiveTab('products')}
                className="btn bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full text-lg"
              >
                Explore Products
              </button>
              <button className="btn border-2 border-white hover:bg-white hover:text-purple-700 font-semibold px-8 py-3 rounded-full text-lg">
                View Pricing
              </button>
            </div>

            <p className="text-sm mt-8 opacity-75">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>

        {/* Main Footer */}
        <div className="bg-[#0F172A] text-white pt-16 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-10">
              {/* Logo + Description */}
              <div className="md:col-span-4">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">🚀</span>
                  <h2 className="text-3xl font-bold">DigiTools</h2>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-xs">
                  Premium digital tools for creators, professionals, and businesses. 
                  Work smarter with our suite of powerful tools.
                </p>
              </div>

              {/* Product */}
              <div className="md:col-span-2">
                <h3 className="font-semibold mb-5 text-gray-300">Product</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white">Features</a></li>
                  <li><a href="#" className="hover:text-white">Pricing</a></li>
                  <li><a href="#" className="hover:text-white">Templates</a></li>
                  <li><a href="#" className="hover:text-white">Integrations</a></li>
                </ul>
              </div>

              {/* Company */}
              <div className="md:col-span-2">
                <h3 className="font-semibold mb-5 text-gray-300">Company</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Press</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="md:col-span-2">
                <h3 className="font-semibold mb-5 text-gray-300">Resources</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white">Documentation</a></li>
                  <li><a href="#" className="hover:text-white">Help Center</a></li>
                  <li><a href="#" className="hover:text-white">Community</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="md:col-span-2">
                <h3 className="font-semibold mb-5 text-gray-300">Social Links</h3>
                <div className="flex gap-4">
                  <div className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">📘</div>
                  <div className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">📷</div>
                  <div className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">𝕏</div>
                </div>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>© 2026 DigiTools. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                <a href="#" className="hover:text-gray-400">Terms of Service</a>
                <a href="#" className="hover:text-gray-400">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;