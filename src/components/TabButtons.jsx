function TabButtons({ activeTab, setActiveTab, totalItems }) {
  return (
    <div className="flex justify-center gap-4 mt-8 mb-12">
      <button
        onClick={() => setActiveTab('products')}
        className={`px-6 py-2 rounded-full font-medium transition-all ${
          activeTab === 'products'
            ? 'bg-purple-600 text-white shadow'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Products
      </button>

      <button
        onClick={() => setActiveTab('cart')}
        className={`px-6 py-2 rounded-full font-medium transition-all ${
          activeTab === 'cart'
            ? 'bg-purple-600 text-white shadow'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Cart ({totalItems})
      </button>
    </div>
  );
}

export default TabButtons;