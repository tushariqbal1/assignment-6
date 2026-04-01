import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      {/* footer er uporer vag  */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-600 py-20 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Ready To Transform Your Workflow?</h2>
          <p className="text-lg opacity-90 mb-10">
            Join thousands of professionals who are already using DigiTools to work smarter.<br />
            Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn border-0 bg-white text-purple-700 hover:bg-gray-100 font-semibold px-3 py-6 rounded-full text-lg">
              Explore Products
            </button>
            <button className="btn border-white hover:bg-white bg-transparent hover:text-purple-700 font-semibold px-5 py-6 rounded-full text-lg">
              View Pricing
            </button>
          </div>

          <p className="text-sm mt-8 opacity-75">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>

      {/* footer main */}
      <div className="bg-[#0F172A] text-white pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold">DigiTools</h2>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Premium digital tools for creators, professionals, and businesses.
                Work smarter with our suite of powerful tools.
              </p>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold mb-5 text-gray-300">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold mb-5 text-gray-300">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold mb-5 text-gray-300">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold mb-5 text-gray-300">Social Links</h3>
              <div className="flex gap-4">
                <div className="w-9 h-9 text-[#101727] bg-white hover:bg-gray-700 hover:text-white rounded-full flex items-center justify-center cursor-pointer transition-colors"> <AiFillInstagram className="h-6 w-6"/> </div>
                <div className="w-9 h-9 bg-white text-[#101727] hover:bg-gray-700 hover:text-white rounded-full flex items-center justify-center cursor-pointer transition-colors"> <FaFacebook className="w-6 h-6"/> </div>
                <div className="w-9 h-9 text-[#101727] bg-white hover:bg-gray-700 hover:text-white rounded-full flex items-center justify-center cursor-pointer transition-colors"> <FaXTwitter className="h-6 w-6"/> </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400">Terms of Service</a>
              <a href="#" className="hover:text-gray-400">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;