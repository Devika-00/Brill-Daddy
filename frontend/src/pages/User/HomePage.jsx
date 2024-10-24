import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import OrginalNavbar from '../../components/User/OrginalUserNavbar';
import NavbarWithMenu from '../../components/User/NavbarwithMenu';
import Footer from '../../components/User/Footer';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: 'Smartphone',
      price: '$699.99',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-sm-s921blbcins-thumb-539572328',
    },
    {
      id: 2,
      name: 'Laptop',
      price: '$999.99',
      image: 'https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg',
    },
    {
      id: 3,
      name: 'Watch',
      price: '$199.99',
      image: 'https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2014_rosegold.jpg?v=1696691332&width=2400',
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: '$299.99',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/latin_en/sm-r861nzkalta/gallery/latin-en-galaxy-watch-fe-r861-sm-r861nzkalta-542999477?$650_519_PNG$',
    },
    {
      id: 5,
      name: 'Camera',
      price: '$499.99',
      image: 'https://global.canon/ja/c-museum/wp-content/uploads/2024/06/dslr906_top.jpg',
    },
    {
      id: 6,
      name: 'Necklace',
      price: '$399.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi8ZbkbKF-7bcH2qTFUfz6tvDm3s0Yr8VJwA&s',
    },
    // Duplicate products for demonstration
    {
      id: 2,
      name: 'Laptop',
      price: '$999.99',
      image: 'https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg',
    },
    {
      id: 3,
      name: 'Watch',
      price: '$199.99',
      image: 'https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2014_rosegold.jpg?v=1696691332&width=2400',
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: '$299.99',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/latin_en/sm-r861nzkalta/gallery/latin-en-galaxy-watch-fe-r861-sm-r861nzkalta-542999477?$650_519_PNG$',
    },
    {
      id: 5,
      name: 'Camera',
      price: '$499.99',
      image: 'https://global.canon/ja/c-museum/wp-content/uploads/2024/06/dslr906_top.jpg',
    },
  ];

  const specialCategoryProducts = [
    {
      id: 1,
      name: 'Smartphone',
      price: '$699.99',
      image: 'https://s.alicdn.com/@sc04/kf/Ha9f0deee5cec4b26ae170b3bb8673520d.png_300x300.jpg',
    },
    {
      id: 2,
      name: 'Laptop',
      price: '$999.99',
      image: 'https://i02.appmifile.com/855_operatorx_operatorx_opx/11/01/2024/4fad3c8039e37a4fa97f8be0462e88e5.png',
    },
    {
      id: 3,
      name: 'Watch',
      price: '$199.99',
      image: 'https://media.assettype.com/digitalterminal%2F2023-05%2F1be25978-a25a-49df-9d76-de3268be756d%2FMotorola_edge_40___1_.jpg',
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: '$299.99',
      image: 'https://image.made-in-china.com/202f0j00UBOWqRpMYEfj/White-Color-C20-PRO-New-2024-Smartphone-4G-5g-Mobile-Phone.jpg',
    },
    {
      id: 5,
      name: 'Camera',
      price: '$499.99',
      image: 'https://www.dxomark.com/wp-content/uploads/medias/post-177413/Huawei-Pocket-2_featured-image-packshot-review-Recovered.png',
    },
    {
      id: 6,
      name: 'Necklace',
      price: '$399.99',
      image: 'https://www.unihertz.com/cdn/shop/products/jelly-star-the-worlds-smallest-android-13-smartphoneunihertzsmartphonesunihertz-275109.jpg?v=1706166852&width=1000',
    },
    
    // Add more products here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 5;

  // Carousel Scroll Left
  const scrollLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? specialCategoryProducts.length - productsPerPage : prevIndex - 1
    );
  };

  // Carousel Scroll Right
  const scrollRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + productsPerPage >= specialCategoryProducts.length
        ? 0
        : prevIndex + 1
    );
  };

  // Calculate visible products
  const visibleProducts = specialCategoryProducts.slice(currentIndex, currentIndex + productsPerPage);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-white">
      <OrginalNavbar />
      <NavbarWithMenu />

      {/* Container for featured categories */}
      <div className="p-6 grid gap-8 md:grid-cols-4 sm:grid-cols-2 lg:gap-12 mx-auto max-w-7xl">
        {/* Category Cards */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
          <img
            src="https://static-assets.business.amazon.com/assets/in/24th-jan/705_Website_Blog_Appliances_1450x664.jpg.transform/1450x664/image.jpg"
            alt="Electronics"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-700">Home Appliances</h2>
            <p className="text-gray-500 mt-2">Wide range of Large Appliances to choose from.</p>
          </div>
        </div>

        {/* Card 2 - Fashion */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
          <img
            src="https://st3.depositphotos.com/3591429/14866/i/450/depositphotos_148668333-stock-photo-credit-card-and-fashion-graphic.jpg"
            alt="Fashion"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-700">Fashion</h2>
            <p className="text-gray-500 mt-2">Stylish clothing and accessories for every season.</p>
          </div>
        </div>

        {/* Card 3 - Sports */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
          <img
            src="https://assets.architecturaldigest.in/photos/60084fc951daf9662c149bb9/16:9/w_2560%2Cc_limit/how-to-clean-gadgets-1366x768.jpg"
            alt="Sports"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-700">Electronics</h2>
            <p className="text-gray-500 mt-2">Latest gadgets and devices at unbeatable prices.</p>
          </div>
        </div>

        {/* Card 4 - Events */}
        <div className="bg-blue-200 shadow-lg rounded-lg p-4 hover:shadow-2xl transition duration-300">
          <h2 className="text-xl font-bold text-gray-700 mb-2 text-center">Events</h2>
          <div className="grid gap-3 grid-cols-1 md:grid-row-2">
            {/* Event 1 */}
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-2 transition-transform transform hover:scale-105 duration-300">
              <img
                src="https://png.pngtree.com/png-clipart/20230809/original/pngtree-design-of-eid-mubarak-gift-coupon-or-voucher-with-blue-background-png-image_10209640.png"
                alt="Event 1"
                className="w-full h-20 object-cover"
              />
            </div>
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-2 transition-transform transform hover:scale-105 duration-300">
              <img
                src="https://png.pngtree.com/png-clipart/20230809/original/pngtree-design-of-eid-mubarak-gift-coupon-or-voucher-with-blue-background-png-image_10209640.png"
                alt="Event 1"
                className="w-full h-20 object-cover"
              />
            </div>
            <div className="mt-2 text-center relative z-10">
              <a
                href="/event"
                className="inline-block px-6 py-2 text-gray-600 hover:text-blue-600 font-semibold transition duration-300"
              >
                View All Events
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 ml-36">Products</h2>
      </div>

      {/* Product Cards Container */}
      <div className="p-6 grid gap-8 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 mx-auto max-w-7xl">
        {/* Product Cards */}
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-700">{product.name}</h2>
              <p className="text-gray-500 mt-2">{product.price}</p>
            </div>
            {/* Wishlist Icon */}
            <div className="absolute top-2 right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6">
        <Link to="/shop" className=" text-blue-950 py-2 px-4 rounded hover:bg-blue-200 transition duration-300">
          View More
        </Link>
      </div>

      {/* Products Section */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-4 ml-36 mt-4">Electronics</h2>
      </div>

      {/* Carousel Container */}
      <div className="relative flex items-center">
        {/* Left Scroll Arrow */}
        <button onClick={scrollLeft} className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg">
          <FaArrowLeft />
        </button>

        {/* Product Cards Container */}
        <div className="p-6 grid gap-8 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 mx-auto max-w-7xl">
          {/* Product Cards */}
          {visibleProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-700">{product.name}</h2>
                <p className="text-gray-500 mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Arrow */}
        <button onClick={scrollRight} className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg">
          <FaArrowRight />
        </button>
      </div>


      <Footer />
    </div>
  );
};

export default HomePage;
