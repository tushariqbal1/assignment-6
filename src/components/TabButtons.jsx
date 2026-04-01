function TabButtons({ activeTab, setActiveTab, totalItems }) {
  return (

    <div >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#101727] mb-3">
          Premium Digital Tools
        </h2>
        <p className=" text-[#627382] max-w-2xl mx-auto text-lg">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-8 mb-12">
        <button
          onClick={() => setActiveTab('products')}
          className={`px-6 py-2 rounded-full cursor-pointer font-medium transition-all ${activeTab === 'products'
            ? 'bg-purple-600 text-white shadow'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab('cart')}
          className={`px-6 py-2 rounded-full cursor-pointer font-medium transition-all ${activeTab === 'cart'
            ? 'bg-purple-600 text-white shadow'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          Cart ({totalItems})
        </button>
      </div>
    </div>
  );
}

export default TabButtons;