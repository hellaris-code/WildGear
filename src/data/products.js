export const products = [
  {
    id: 1,
    name: "Alpine Trekker Tent",
    category: "tents",
    price: 299,
    description: "Perfect for solo adventurers and duos. Ultra-lightweight and wind-resistant.",
    specs: { weight: "2.1 kg", capacity: "2-person", material: "Nylon RIPSTOP" },
    image: "/tent1.jpg.jpg",
    images: [
      "/tent1.jpg.jpg",
      "/tent2.jpg.jpg"
    ]
  },
  {
    id: 2,
    name: "EcoLite Sleeping Bag",
    category: "sleeping-bags",
    price: 129,
    description: "Lightweight summer sleeping bag made from recycled ocean plastics.",
    specs: { weight: "0.9 kg", rating: "+10°C to +15°C", shape: "Blanket" },
    image: "/sleeping-bag1.jpg.jpg",
    images: [
      "/sleeping-bag1.jpg.jpg",
      "/sleeping-bag2.jpg.jpg"
    ]
  },
  {
    id: 3,
    name: "Hanging Camp Kettle",
    category: "equipment",
    price: 45,
    description: "Stainless steel kettle with a sturdy handle built for campfire tripods.",
    specs: { volume: "1.5L", material: "Stainless Steel", weight: "350g" },
    image: "/kettle1.jpg.jpg",
    images: [
      "/kettle1.jpg.jpg",
      "/kettle2.jpg.jpg"
    ]
  }
];

export const categories = [
  { id: "tents", name: "Tents", image: "/tent1.jpg.jpg" },
  { id: "sleeping-bags", name: "Sleeping Bags", image: "/sleeping-bag1.jpg.jpg" },
  { id: "equipment", name: "Equipment", image: "/kettle1.jpg.jpg" }
];
