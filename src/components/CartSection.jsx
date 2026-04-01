import { FaShoppingCart } from "react-icons/fa";

function CartSection({ cart, removeFromCart, proceedToCheckout, totalPrice }) {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      {cart.length === 0 ? (
        <div className="text-center mt-20">
          <div className="flex justify-center mb-4">
            <FaShoppingCart className="text-gray-300 text-6xl" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-400 mb-1">
            Your cart is empty
          </h3>
          <p className="text-gray-500">
            Add some products to get started
          </p>
        </div>
      ) : (
        <>
          {/* Cart er Item gula */}
          <h2 className="text-[#101727] text-2xl  font-bold mb-4">Your Cart</h2>
          <div className="space-y-4 mb-8 ">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center shadow-xl gap-4 bg-gray-50 p-5 rounded-xl"
              >

                {/* Icon add korte hobe */}
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-10 h-10 object-contain border border-[#F2F2F2] p-1 rounded-full"
                />


                {/* Info dekhate hobe */}
                <div className="flex-1">
                  <h3 className="text-lg text-[#101727] font-semibold">
                    {item.name} Hey
                  </h3>
                  <p className="text-gray-500 text-sm">
                    ${item.price} / {item.period}
                  </p>
                </div>

                {/* Remove Button er kaj korte hobe */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="cursor-pointer btn btn-secondary text-sm font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Section + korte hobe */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between text-xl font-semibold mb-4">
              <span className="text-[#627382]">Total:</span>
              <span className="text-2xl font-bold text-[#101727]">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            {/*chackout btn ekhane */}
            <button
              onClick={proceedToCheckout}
              className="w-full py-4 rounded-full text-white font-semibold 
              bg-gradient-to-r from-purple-500 to-indigo-600 
              hover:from-purple-600 hover:to-indigo-700 transition cursor-pointer"
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartSection;