# WildGear - Outdoor & Camping E-Commerce Website

A modern, fully functional e-commerce website for outdoor and camping enthusiasts built with React, Tailwind CSS, and the Context API.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Shopping Cart**: Complete cart functionality with add, remove, and quantity adjustment
- **Product Catalog**: Dynamic product filtering by category with search and sort capabilities
- **Beautiful UI**: Nature-inspired design with forest green and campfire orange color scheme
- **Smooth Animations**: Hover effects and transitions throughout the interface
- **Sticky Navigation**: Translucent header with blur effect for easy navigation

## Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Fonts**: Inter & Montserrat (Google Fonts)

## Project Structure

```
WildGear/
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CategoryCards.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Cart.jsx
│   │   └── Catalog.jsx
│   ├── context/          # Context providers
│   │   └── CartContext.jsx
│   ├── data/             # Mock data
│   │   └── products.js
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── postcss.config.js     # PostCSS configuration
```

## Installation

1. **Navigate to the project directory**:
   ```bash
   cd WildGear
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Usage

### Navigation
- Click the **WildGear** logo or **Home** to return to the homepage
- Click **Shop** to view all products
- Click on category cards to filter products by category

### Shopping Cart
- Click the **cart icon** in the navbar to open the cart sidebar
- Click **Add** on any product card to add it to your cart
- Use the **+** and **-** buttons in the cart to adjust quantities
- Click the **trash icon** to remove items from the cart
- View the total and proceed to checkout

### Product Catalog
- Use the **search bar** to find specific products
- Use the **sort dropdown** to sort by price (low to high or high to low)
- Click **category tabs** to filter by product type
- Click **category cards** on the homepage to jump to specific categories

## Product Categories

1. **Tents (Палатки)**: Alpine Trekker, Family Dome, Expedition Base Camp
2. **Sleeping Bags (Спальные мешки)**: Arctic Cocoon, Summer Trail, All-Season Hybrid
3. **Camping Equipment (Инвентарь)**: Portable Kettle, Cast Iron Cook Set, Compact Grill

## Customization

### Color Palette
Colors are defined in `tailwind.config.js`:
- `forest-900`, `forest-800`, `forest-700`: Deep forest greens
- `charcoal`: Dark grey backgrounds
- `campfire`: Accent orange (#F59E0B)
- `campfire-dark`: Darker accent (#EA580C)

### Product Data
Edit `src/data/products.js` to add or modify products and categories.

### Components
All components are located in `src/components/` and can be customized independently.

## License

This project is open source and available for educational purposes.
