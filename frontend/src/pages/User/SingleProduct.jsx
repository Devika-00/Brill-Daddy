import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import OrginalNavbar from '../../components/User/OrginalUserNavbar';
import NavbarWithMenu from '../../components/User/NavbarwithMenu';
import Footer from '../../components/User/Footer';

const SingleProduct = () => {
  const [mainImage, setMainImage] = useState('https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/nordn200-sixteen_nine.jpg?VersionId=iRIgkIrvQVYt2oEsEVzh_p_OR3CHAeSY&size=690:388');

  const smallImages = [
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/nordn200-sixteen_nine.jpg?VersionId=iRIgkIrvQVYt2oEsEVzh_p_OR3CHAeSY&size=690:388',
    'https://m.media-amazon.com/images/I/51c0FSRyA7L._SX679_.jpg',
    'https://m.media-amazon.com/images/I/51BWdKswXFL._SX679_.jpg',
    'https://m.media-amazon.com/images/I/51cBlxHGfAL._SL1500_.jpg',
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-300 to-white">
        <OrginalNavbar />
        <NavbarWithMenu />
        
        {/* Single Product Section */}
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images Section */}
            <div className="flex flex-col items-center">
              <div className="relative overflow-hidden h-96 w-full max-w-md lg:max-w-lg bg-gray-100 rounded-lg cursor-pointer transition-transform duration-300">
                <img 
                  src={mainImage} 
                  alt="Product" 
                  className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-125"
                />
              </div>
              
              {/* Small Images */}
              <div className="flex space-x-4 mt-4">
                {smallImages.map((img, index) => (
                  <img 
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-20 h-20 rounded-lg cursor-pointer transition-opacity duration-300 hover:opacity-80"
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="flex flex-col space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">Product Name</h1>
              <p className="text-lg text-gray-700">This is a brief description of the product. It explains the key features and benefits of the item.</p>

              {/* Pricing */}
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-red-600">₹2,999</span>
                <span className="text-xl text-gray-500 line-through">₹4,999</span>
                <span className="text-lg text-green-600">40% OFF</span>
              </div>

              {/* Colour and Size Options */}
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-gray-800">Colour:</span>
                  <div className="flex space-x-2">
                    <span className="w-6 h-6 rounded-full bg-red-500 cursor-pointer"></span>
                    <span className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"></span>
                    <span className="w-6 h-6 rounded-full bg-yellow-500 cursor-pointer"></span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-gray-800">Size:</span>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded hover:bg-gray-100">S</button>
                    <button className="px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded hover:bg-gray-100">M</button>
                    <button className="px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded hover:bg-gray-100">L</button>
                  </div>
                </div>
              </div>

              {/* About the Item */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">About This Item</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>High-quality material ensures durability and comfort.</li>
                  <li>Designed for a modern and stylish look.</li>
                  <li>Available in multiple colors and sizes.</li>
                  <li>Perfect for casual or formal wear.</li>
                </ul>
              </div>

              {/* Add to Cart and Buy Now Buttons */}
              <div className="mt-6 flex space-x-4">
                <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors duration-300 flex items-center">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  Add to Cart
                </button>
                <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300 flex items-center">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2" />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default SingleProduct;
