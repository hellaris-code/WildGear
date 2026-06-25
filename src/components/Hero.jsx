import { ArrowRight } from 'lucide-react';

const Hero = ({ onExplore }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 text-shadow leading-tight">
          Gear Up For Your Next Adventure
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 text-shadow max-w-2xl mx-auto">
          Premium outdoor equipment for every expedition. From mountain peaks to forest trails, we've got you covered.
        </p>
        <button
          onClick={onExplore}
          className="inline-flex items-center space-x-2 bg-campfire hover:bg-campfire-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span>Explore Catalog</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
