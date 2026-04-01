function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="p-8 pb-4 flex justify-between items-start">
        <div className="">
          <img
            src={product.icon}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        {product.tag && (
          <div className={`px-4 py-1 text-xs font-medium rounded-full
      ${product.tagType === 'best-seller' ? 'bg-amber-100 text-amber-700' :
              product.tagType === 'popular' ? 'bg-purple-100 text-purple-700' :
                product.tagType === 'new' ? 'bg-emerald-100 text-emerald-700' :
                  'bg-gray-100 text-gray-600'}`}>
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
          className="w-full bg-purple-600 hover:bg-purple-700 cursor-pointer text-white font-semibold py-4 rounded-2xl transition-all duration-200 active:scale-95"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;