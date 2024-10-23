import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import OrginalNavbar from '../../components/User/OrginalUserNavbar';
import NavbarWithMenu from '../../components/User/NavbarwithMenu';
import Footer from '../../components/User/Footer';

const WishlistPage = () => {
  // Sample data for wishlist items
  const wishlistItems = [
    {
      id: 1,
      name: 'Stylish Sunglasses',
      description: 'High-quality sunglasses with UV protection.',
      image: 'https://optorium.in/cdn/shop/files/1_69745283-8e15-489f-b6a0-7487f43d4e75.png?v=1697539923&width=1200',
    },
    {
      id: 2,
      name: 'Leather Wallet',
      description: 'Genuine leather wallet with multiple compartments.',
      image: 'https://5.imimg.com/data5/OF/GH/MY-7610375/handmade-men-s-short-leather-wallet.jpg',
    },
    {
      id: 3,
      name: 'Bluetooth Headphones',
      description: 'Noise-cancelling over-ear headphones with long battery life.',
      image: 'https://5.imimg.com/data5/JS/AW/BL/SELLER-65538252/sound-one-bt-06-bluetooth-headphones-black-.jpg',
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'Feature-rich smartwatch with heart rate monitoring.',
      image: 'https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg',
    },
  ];

  const handleAddToCart = (id) => {
    console.log(`Added item ${id} to cart.`);
  };

  const handleRemoveFromWishlist = (id) => {
    console.log(`Removed item ${id} from wishlist.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-white">
        <OrginalNavbar />
        <NavbarWithMenu />
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8 mt-8">Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-10 mr-10">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={item.image} alt={item.name} className=" w-64 h-48 object-cover ml-20 mt-5" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleAddToCart(item.id)}
                  className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-700 transition duration-300 flex items-center"
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 flex items-center"
                >
                  <FontAwesomeIcon icon={faTrash} className="mr-2" />
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default WishlistPage;
