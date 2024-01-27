let productList = [];
const url = "https://striveschool-api.herokuapp.com/api/product/";

let smartphone = {
  name: "Smartphone XYZ",
  description: "Powerful smartphone with advanced features.",
  brand: "TechMaster",
  imageUrl: "https://placehold.co/200x320",
  price: 599.99,
};

const Laptop = {
  name: "Laptop Pro",
  description: "High-performance laptop for professionals.",
  brand: "ElectroTech",
  imageUrl: "https://placehold.co/200x320",
  price: 1299.99,
};

const coffe = {
  name: "Coffee Maker Deluxe",
  description: "State-of-the-art coffee maker for coffee enthusiasts.",
  brand: "BrewMaster",
  imageUrl: "https://placehold.co/200x320",
  price: 149.99,
};
const fitnessTecker = {
  name: "Fitness Tracker",
  description: "Track your fitness and stay healthy.",
  brand: "ActiveLife",
  imageUrl: "https://placehold.co/200x320",
  price: 79.99,
};
const Wireless = {
  name: "Wireless Headphones",
  description: "Immersive sound experience with noise cancellation.",
  brand: "SoundWave",
  imageUrl: "https://placehold.co/200x320",
  price: 129.99,
};

const digitalCamera = {
  name: "Digital Camera",
  description: "Capture your moments with high-quality photos.",
  brand: "PhotoMaster",
  imageUrl: "https://placehold.co/200x320",
  price: 449.99,
};

const addProduct = (product) => {
  productList.push(product);
  document.getElementById("total-items").innerHTML = productList.length;

  const total = (product) => {};
};
addProduct();
