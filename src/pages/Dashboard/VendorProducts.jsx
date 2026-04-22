import React, { useEffect, useState } from 'react';
import { productService } from '../../services/productService';

const VendorProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const data = await productService.getAllProducts();
      setProducts(data || []);
    } catch (err) {
      console.error(err.message || 'Failed to load products');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      <div className="product-page-header">
        <div>
          <h2>Product Catalog</h2>
          <p>All products added by manufacturers for vendor review.</p>
        </div>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Warranty Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="6" className="empty-row">
                  Loading products...
                </td>
              </tr>
            ) : products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td className="product-id" data-label="Product ID">{product.id}</td>
                  <td data-label="Product Name">{product.name}</td>
                  <td data-label="Category">{product.category}</td>
                  <td data-label="Price">{product.price}</td>
                  <td data-label="Warranty Type">{product.warranty}</td>
                  <td className="description-cell" data-label="Description">{product.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="empty-row">
                  No manufacturer products are available yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorProducts;