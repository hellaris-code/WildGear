import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryCards from './components/CategoryCards';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import ProductModal from './components/ProductModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (page === 'home') {
      setSelectedCategory(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExplore = () => {
    setCurrentPage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <CartProvider>
      <div className="min-h-screen relative">
        <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
        
        {currentPage === 'home' ? (
          <>
            <Hero onExplore={handleExplore} />
            <CategoryCards onSelectCategory={handleSelectCategory} />
          </>
        ) : (
          <Catalog
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
            onProductClick={handleProductClick}
          />
        )}
      </div>
      
      {/* Cart Overlay */}
      <Cart />
      
      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </CartProvider>
  );
}

export default App;
