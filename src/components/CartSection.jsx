function CartSection({ cart, removeFromCart, proceedToCheckout, totalPrice }) {
  return (
    <div className="max-w-3xl mx-auto">
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-7xl mb-4">🛒</div>
          <h3 className="text-2xl font-semibold mb-2">Your cart is empty</h3>
          <p className="text-gray-500">Add some products to get started</p>
        </div>
      ) : (
        <>
          <div className="space-y-6 mb-10">
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border">
                <div className="text-5xl">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-500">${item.price} / {item.period}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600 font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border">
            <div className="flex justify-between text-2xl font-bold mb-6">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>

            <button
              onClick={proceedToCheckout}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-2xl"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartSection;