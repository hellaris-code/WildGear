import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !product) return null;

  const images = product.images || [product.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div
          className="bg-charcoal rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Modal Content */}
          <div className="flex flex-col lg:flex-row h-full">
            {/* Left Column - Image Slider */}
            <div className="lg:w-1/2 relative bg-warm-grey">
              <div className="aspect-square lg:aspect-auto lg:h-full relative">
                <img
                  src={images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  </>
                )}

                {/* Thumbnail Dots */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex
                            ? 'bg-campfire'
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Product Details */}
            <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 overflow-y-auto">
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {product.name}
                  </h2>
                  <div className="inline-block bg-forest-700 text-white/90 text-sm font-medium px-3 py-1 rounded-full">
                    {typeof product.specs === 'object' 
                      ? Object.values(product.specs).join(' • ') 
                      : product.specs}
                  </div>
                </div>

                {/* Price */}
                <div className="text-4xl font-bold text-campfire">
                  ${product.price}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                  <p className="text-white/80 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Specifications */}
                {product.specs && typeof product.specs === 'object' && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Specifications</h3>
                    <div className="space-y-2">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-white/10">
                          <span className="text-white/60 capitalize">{key}</span>
                          <span className="text-white font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-campfire hover:bg-campfire-dark text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
