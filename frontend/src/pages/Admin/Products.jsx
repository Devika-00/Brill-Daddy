import React, { useState } from 'react';
import Navbar from '../../components/Admin/Navbar';
import Sidebar from '../../components/Admin/Sidebar';

const Product = () => {
  const initialProducts = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/150',
      description: 'Description of Product 1',
      price: '$50',
      stock: 20,
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      description: 'Description of Product 2',
      price: '$30',
      stock: 10,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', image: '', description: '', price: '', stock: '' });

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsViewModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct({ ...product }); // Clone product data for editing
    setIsEditModalOpen(true);
  };

  const handleDeleteProduct = (product) => {
    setSelectedProduct(product); // Set selected product to delete
    setIsDeleteModalOpen(true); // Open delete confirmation modal
  };

  const confirmDeleteProduct = () => {
    setProducts(products.filter((p) => p.id !== selectedProduct.id));
    setIsDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddProduct = () => {
    setIsAddModalOpen(true);
  };

  const handleAddProductSubmit = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({ name: '', image: '', description: '', price: '', stock: '' });
    setIsAddModalOpen(false);
  };

  const handleEditProductSubmit = () => {
    setProducts(products.map((product) => (product.id === selectedProduct.id ? selectedProduct : product)));
    setIsEditModalOpen(false);
    setSelectedProduct(null);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({ ...newProduct, image: reader.result }); // Set the uploaded image as base64
      };
      reader.readAsDataURL(file);
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
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  <button
                    onClick={() => handleViewDetails(product)}
                    className="text-blue-500 hover:underline">
                    View Details
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEditProduct(product)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 mr-2">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Details Modal */}
      {isViewModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{selectedProduct.name}</h3>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-32 h-32 mb-4 rounded-full object-cover"
            />
            <p>{selectedProduct.description}</p>
            <p className="mt-2 font-semibold">Price: {selectedProduct.price}</p>
            <p className="mt-2 font-semibold">Stock: {selectedProduct.stock}</p>
            <button
              onClick={() => setIsViewModalOpen(false)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {isEditModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Edit Product</h3>
            <input
              type="text"
              value={selectedProduct.name}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
              className="border p-2 mb-4 w-full rounded-md"
              placeholder="Product Name"
            />
            <input
              type="text"
              value={selectedProduct.description}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })}
              className="border p-2 mb-4 w-full rounded-md"
              placeholder="Description"
            />
            <input
              type="text"
              value={selectedProduct.price}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
              className="border p-2 mb-4 w-full rounded-md"
              placeholder="Price"
            />
            <input
              type="text"
              value={selectedProduct.stock}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, stock: e.target.value })}
              className="border p-2 mb-4 w-full rounded-md"
              placeholder="Stock"
            />
            <div className="flex justify-end">
              <button
                onClick={handleEditProductSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2">
                Save
              </button>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Are you sure you want to delete this product?</h3>
            <div className="flex justify-end">
              <button
                onClick={confirmDeleteProduct}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mr-2">
                Confirm
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Add New Product</h3>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="border p-2 mb-4 w-full rounded-md"
              placeholder="Product Name"
            />
            <input
              type="text"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              className="border p-2 mb-4 w-full rounded-md"
              placeholder="Description"
            />
            <input
              type="text"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className="border p-2 mb-4 w-full rounded-md"
              placeholder="Price"
            />
            <input
              type="text"
              value={newProduct.stock}
              onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
              className="border p-2 mb-4 w-full rounded-md"
              placeholder="Stock"
            />
            <input
              type="file"
              onChange={handleImageUpload}
              className="border p-2 mb-4 w-full rounded-md"
            />
            <div className="flex justify-end">
              <button
                onClick={handleAddProductSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2">
                Add Product
              </button>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                Cancel
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
