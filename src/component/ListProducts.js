const products = [
  {
    _id: {
      $oid: "67c62a38f2d8b67179988059",
    },
    name: "iPhone 14 Pro",
    description:
      "Apple's latest smartphone with A16 Bionic chip and ProMotion display.",
    category: "Smartphones",
    price: 1099,
    stock: 50,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwxR2plMrWrCqlMvoWvSZpeyp-XRETYC9Vw&s",
      "https://ispaceservices.com/storage/2022/09/14-pro-family.png",
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111846_sp875-sp876-iphone14-pro-promax.png",
    ],
    brand: "Apple",
    __v: 0,
    id: 0,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988060",
    },
    name: "Samsung Galaxy S23 Ultra",
    description:
      "Flagship Android phone with a 200MP camera and Snapdragon 8 Gen 2 processor.",
    category: "Smartphones",
    price: 1199,
    stock: 40,
    images: [
      "https://www.tunisianet.com.tn/344715-large/smartphone-samsung-galaxy-s23-ultra-5g-12-go-256-go-vert.jpg",
      "https://m.media-amazon.com/images/I/71IGA2fdntL.jpg",
      "https://bestphone.tn/wp-content/uploads/2024/12/Samsung20Galaxy20S2320Ultra205G20Creme.png",
    ],
    brand: "Samsung",
    __v: 0,
    id: 1,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988061",
    },
    name: "Sony WH-1000XM5",
    description:
      "Industry-leading noise-canceling headphones with exceptional sound quality.",
    category: "Headphones",
    price: 399,
    stock: 30,
    images: [
      "https://images-cdn.ubuy.ae/633ac1a8e22c171ed47edec1-sony-wh-1000xm5-wireless-noise-canceling.jpg",
    ],
    brand: "Sony",
    __v: 0,
    id: 2,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988062",
    },
    name: "MacBook Air M2",
    description:
      "Ultra-thin and lightweight laptop powered by Apple's M2 chip.",
    category: "Laptops",
    price: 1299,
    stock: 25,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLI46pMjHRGlMqufszRO1Uiw1nscLXowjRuQ&s",
    ],
    brand: "Apple",
    __v: 0,
    id: 3,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988063",
    },
    name: "Logitech MX Master 3S",
    description:
      "Ergonomic wireless mouse with ultra-fast scrolling and customizable buttons.",
    category: "Accessories",
    price: 99,
    stock: 100,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbk4x6tUYcC9oXLSkohke2FuZk4MR9YNeuKw&s",
    ],
    brand: "Logitech",
    __v: 0,
    id: 4,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988064",
    },
    name: "Samsung 32-inch 4K Monitor",
    description:
      "UHD 4K display with HDR support for an immersive viewing experience.",
    category: "Monitors",
    price: 349,
    stock: 20,
    images: [
      "https://i5.walmartimages.com/seo/SAMSUNG-32-Class-Curved-4K-UHD-3840-x-2160-60Hz-4ms-Monitor-LU32R590CWNXZA_faae156a-1e1b-440d-9ef7-7fe76cb35660_1.05dcd4091c5b4f6310e9c441ca63991d.jpeg",
    ],
    brand: "Samsung",
    __v: 0,
    id: 5,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988065",
    },
    name: "Dell XPS 15",
    description: "Powerful laptop with Intel Core i7 and NVIDIA RTX 3050 Ti.",
    category: "Laptops",
    price: 1799,
    stock: 15,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXaTKLN4dLtsmi8ZmHbX1KAxNfJEISlM-Y9A&s",
    ],
    brand: "Dell",
    __v: 0,
    id: 6,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988066",
    },
    name: "Bose QuietComfort 45",
    description:
      "Noise-canceling wireless headphones with high-fidelity audio.",
    category: "Headphones",
    price: 329,
    stock: 35,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkCe_k8XxYtTQDYsLrNrLuIWakuYjjJ44SAw&s",
    ],
    brand: "Bose",
    __v: 0,
    id: 7,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988067",
    },
    name: "Apple Watch Series 8",
    description:
      "Advanced smartwatch with health tracking and crash detection.",
    category: "Wearables",
    price: 499,
    stock: 60,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDaK2nCNamUagrwQQDCT4j17TC7gEc0xcpew&s",
    ],
    brand: "Apple",
    __v: 0,
    id: 8,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988068",
    },
    name: "Google Pixel 7 Pro",
    description:
      "Google's flagship phone with Tensor G2 chip and AI-powered camera.",
    category: "Smartphones",
    price: 899,
    stock: 45,
    images: [
      "https://m.media-amazon.com/images/I/51f4A6Tr8zL._AC_SR1000,1000_.jpg",
    ],
    brand: "Google",
    __v: 0,
    id: 9,
    quantity: 1,
  },
];

export default products;
