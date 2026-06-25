import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onCardClick }) => {
  const { addToCart } = useCart();

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(product);
    }
  };

  return (
    <div 
      className="bg-charcoal rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-warm-grey">
        <img
          src={product.images && product.images[0] ? product.images[0] : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Specs Badge */}
        <div className="inline-block bg-forest-700 text-white/90 text-xs font-medium px-3 py-1 rounded-full mb-3">
          {typeof product.specs === 'object' 
            ? Object.values(product.specs).join(' • ') 
            : product.specs}
        </div>

        <p className="text-white/60 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-campfire">
            ${product.price}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="inline-flex items-center space-x-2 bg-campfire hover:bg-campfire-dark text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
