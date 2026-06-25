import { X, Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Sidebar */}
      <div className="fixed inset-y-0 right-0 w-full sm:w-[450px] bg-neutral-950/40 backdrop-blur-xl backdrop-brightness-50 border-l border-white/10 rounded-l-3xl shadow-2xl z-50 transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-transparent">
          <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-white/60">
              <ShoppingCart className="w-16 h-16 mb-4" />
              <p className="text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-neutral-900/40 rounded-xl p-4 border border-white/5"
                >
                  {/* Image */}
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm mb-1 truncate">
                      {item.name}
                    </h3>
                    <p className="text-campfire font-bold mb-2">
                      ${item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-campfire/80 rounded-lg transition-all duration-200"
                      >
                        <Minus className="w-4 h-4 text-white" />
                      </button>
                      <span className="text-white font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-campfire/80 rounded-lg transition-all duration-200"
                      >
                        <Plus className="w-4 h-4 text-white" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto p-2 hover:bg-red-500/20 rounded-lg transition-colors group"
                      >
                        <Trash2 className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="bg-transparent border-t border-white/10 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white/80">Subtotal</span>
              <span className="text-2xl font-bold text-white">${cartTotal}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-campfire to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-campfire/25">
              Proceed to Checkout
            </button>
            <p className="text-center text-white/50 text-sm">
              Shipping and taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
