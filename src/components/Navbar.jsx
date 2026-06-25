import { Mountain, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = ({ onNavigate, currentPage }) => {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onNavigate('home')}
          >
            <Mountain className="w-8 h-8 text-campfire" />
            <span className="text-xl font-bold text-white">WildGear</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors hover:text-campfire ${
                currentPage === 'home' ? 'text-campfire' : 'text-white/80'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('shop')}
              className={`text-sm font-medium transition-colors hover:text-campfire ${
                currentPage === 'shop' ? 'text-campfire' : 'text-white/80'
              }`}
            >
              Shop
            </button>
          </div>

          {/* Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-white hover:text-campfire transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-campfire text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
