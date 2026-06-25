import { categories } from '../data/products';
import { ArrowRight } from 'lucide-react';

const CategoryCards = ({ onSelectCategory }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
        Explore Our Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tents Card */}
        <div
          className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          onClick={() => onSelectCategory('tents')}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/tent1.jpg.jpg"
              alt="Tents"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Tents</h3>
            <button className="inline-flex items-center space-x-2 text-campfire font-semibold group-hover:text-campfire-dark transition-colors">
              <span>View Products</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Sleeping Bags Card */}
        <div
          className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          onClick={() => onSelectCategory('sleeping-bags')}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/sleeping-bag1.jpg.jpg"
              alt="Sleeping Bags"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Sleeping Bags</h3>
            <button className="inline-flex items-center space-x-2 text-campfire font-semibold group-hover:text-campfire-dark transition-colors">
              <span>View Products</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Equipment Card */}
        <div
          className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          onClick={() => onSelectCategory('equipment')}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/kettle1.jpg.jpg"
              alt="Equipment"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Equipment</h3>
            <button className="inline-flex items-center space-x-2 text-campfire font-semibold group-hover:text-campfire-dark transition-colors">
              <span>View Products</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
