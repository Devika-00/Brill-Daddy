import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Admin/Navbar';
import Sidebar from '../../components/Admin/Sidebar';
import axios from 'axios';
import { SERVER_URL } from '../../Constants';
import { uploadImagesToCloudinary } from '../../Api/uploadImage';

const Product = () => {
  const initialProducts = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/150',
      description: 'Description of Product 1',
      price: 50,
      salesPrice: 45,
      stock: 20,
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      description: 'Description of Product 2',
      price: 30,
      salesPrice: 25,
      stock: 10,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    category: '',
    brand: '',
    price: '',
    salesPrice: '',
    discount: '',
    color: '', 
    mainImage: '',
    smallImages: [],
    quantity: '',
  });

  useEffect(() => {
    axios.get(`${SERVER_URL}/admin/brands`)
      .then((response) => {
        console.log('Brands:', response.data);
        setBrands(response.data);
      })
      .catch(error => {
        console.error('Error fetching brands:', error);
        setBrands([]);
      });

    axios.get(`${SERVER_URL}/admin/categories`)
      .then((response) => {
        console.log('Categories:', response.data);
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setCategories([]); // Set to empty array on error
      });
  }, []);

  const handleAddProduct = () => {
    setIsAddModalOpen(true);
  };

  const handleAddProductSubmit = async () => {
    // Ensure sales price is valid
    if (parseFloat(newProduct.salesPrice) >= parseFloat(newProduct.price)) {
      alert('Sales price should be less than price');
      return;
    }
    console.log(newProduct,"ooooooooooooooooooooooooo")
  
    // Upload main image to Cloudinary
    const mainImageUrl = await uploadImagesToCloudinary(newProduct.mainImage);
    console.log(mainImageUrl,"IIIIIIIIIIII")
    if (!mainImageUrl) return;  // Handle upload error
  
    // Upload small images to Cloudinary
    const smallImagesUrls = await Promise.all(
      newProduct.smallImages.map(image => uploadImagesToCloudinary(image))
    );
    console.log(smallImagesUrls,"Sssssssssssssss")

  
    // Create product object with uploaded image URLs
    const productWithImages = {
      name: newProduct.name,
      description: newProduct.description,
      price: newProduct.price,
      salesPrice: newProduct.salesPrice,
      category: newProduct.category,
      brand: newProduct.brand,
      quantity: newProduct.quantity,
      color: newProduct.color,
      discount: newProduct.discount,
      images: {
        thumbnailUrl: mainImageUrl,  // Main image
        imageUrl: smallImagesUrls.filter(url => url),  // Small images
      },
    };
  
    try {
      // Send product data to the backend
      console.log(productWithImages,"iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
      const response = await axios.post(`${SERVER_URL}/admin/addProducts`, productWithImages);
      if (response.status === 201) {
        // Update the product list after successful save
        setProducts([...products, response.data]);
  
        // Reset the product form
        setNewProduct({
          name: '',
          description: '',
          category: '',
          brand: '',
          price: '',
          salesPrice: '',
          discount: '',
          color: '',
          mainImage: '',
          smallImages: [],
          quantity: '',
        });
  
        setIsAddModalOpen(false);
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Error saving product');
    }
  };

  const handleImageUpload = (e, type) => {
    const files = e.target.files;
  
    if (type === 'main') {
      // Handle single main image
      setNewProduct((prev) => ({
        ...prev,
        mainImage: files[0],  // Assuming it's a file input
      }));
    } else if (type === 'small') {
      // Handle multiple small images
      setNewProduct((prev) => ({
        ...prev,
        smallImages: Array.from(files),  // Convert files to array
      }));
    }
  };
  
  
  

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-700">Product List</h2>
            <button
              onClick={handleAddProduct}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Add Product
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Image</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Product Details</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600">{product.name}</td>
                    <td className="px-4 py-2">
                      <img src={product.mainImage || 'https://via.placeholder.com/150'} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      <button className="text-blue-500 hover:underline">View Details</button>
                    </td>
                    <td className="px-4 py-2">
                      <button className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 mr-2">Edit</button>
                      <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Product Modal */}
          {isAddModalOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-2/4">
                <h3 className="text-xl font-bold mb-2">Add New Product</h3>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="border p-2 mb-2 w-full rounded-md"
                  placeholder="Product Name"
                />
                <textarea
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="border p-2 mb-2 w-full rounded-md"
                  placeholder="Description"
                />
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  className="border p-2 mb-3 w-full rounded-md">
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <select
                  value={newProduct.brand}
                  onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
                  className="border p-2 mb-3 w-full rounded-md">
                  <option value="">Select Brand</option>
                  {brands.map((brand) => (
                    <option key={brand._id} value={brand._id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  className="border p-2 mb-3 w-full rounded-md"
                  placeholder="Price"
                />
                <input
                  type="number"
                  value={newProduct.salesPrice}
                  onChange={(e) => setNewProduct({ ...newProduct, salesPrice: e.target.value })}
                  className="border p-2 mb-3 w-full rounded-md"
                  placeholder="Sales Price"
                />
                <input
                  type="text"
                  value={newProduct.color}
                  onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value })}
                  className="border p-2 mb-3 w-full rounded-md"
                  placeholder="Color (e.g., Red, #FF0000)"
                /><p>Select Main Image</p>
                <input
                  type="file"
                  onChange={(e) => handleImageUpload(e, 'main')}
                  className="border p-2 mb-3 w-full rounded-md"
                  placeholder = "choose Main image"
                />
                <p>Select Sub Images</p>
                <input
                  type="file"
                  onChange={(e) => handleImageUpload(e, 'small')}
                  multiple
                  className="border p-2 mb-3 w-full rounded-md"
                 

                />
                <input
                  type="number"
                  value={newProduct.quantity}
                  onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
                  className="border p-2 mb-3 w-full rounded-md"
                  placeholder="Quantity"
                />
                <div className="flex justify-between">
                  <button
                    onClick={() => setIsAddModalOpen(false)}
                    className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400">
                    Cancel
                  </button>
                  <button
                    onClick={handleAddProductSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default Product;
