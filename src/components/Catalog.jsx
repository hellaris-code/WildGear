import { useState, useMemo, useRef, useEffect } from 'react';
import { Search, ArrowUpDown, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';

const Catalog = ({ selectedCategory, onSelectCategory, onProductClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef(null);

  const sortOptions = [
    { value: 'default', label: 'Sort by' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (typeof p.specs === 'string' 
            ? p.specs.toLowerCase().includes(searchTerm.toLowerCase())
            : Object.values(p.specs).some(val => 
                val.toLowerCase().includes(searchTerm.toLowerCase())
              )) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort by price
    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  const currentCategory = categories.find((c) => c.id === selectedCategory);

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          {currentCategory ? currentCategory.name : 'All Products'}
        </h1>
      </div>

      {/* Filters */}
      <div className="bg-charcoal rounded-xl p-4 mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-forest-900 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-campfire transition-colors"
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 w-full sm:w-auto" ref={sortRef}>
          <ArrowUpDown className="w-5 h-5 text-white/50" />
          <div className="relative w-full sm:w-48">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="w-full px-4 py-3 bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-xl text-white focus:outline-none focus:border-campfire transition-all duration-300 flex items-center justify-between hover:bg-neutral-900/80"
            >
              <span>{sortOptions.find(opt => opt.value === sortBy)?.label}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isSortOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden z-50 shadow-xl">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setIsSortOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left transition-colors duration-200 ${
                      sortBy === option.value
                        ? 'bg-campfire text-white'
                        : 'text-white/70 hover:bg-campfire/20 hover:text-white'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            !selectedCategory
              ? 'bg-campfire text-white'
              : 'bg-forest-800 text-white/70 hover:bg-forest-700'
          }`}
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-campfire text-white'
                : 'bg-forest-800 text-white/70 hover:bg-forest-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onCardClick={onProductClick}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-white/60">No products found</p>
          <p className="text-white/40 mt-2">Try adjusting your search or filters</p>
        </div>
      )}
    </section>
  );
};

export default Catalog;
