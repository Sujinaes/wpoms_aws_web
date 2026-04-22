const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://192.168.2.183:8081';

export const productService = {
  getAllProducts: async () => {
    try {
      const response = await fetch(`${API_URL}/api/products`);
      if (!response.ok) throw new Error('Failed to fetch products');
      return await response.json();
    } catch (error) {
      console.error(error);
      return []; // Fallback to avoid UI crashing while API is not ready
    }
  },

  addProduct: async (data) => {
    const response = await fetch(`${API_URL}/api/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to add product');
    
    try {
      return await response.json();
    } catch {
      return { success: true, product: data };
    }
  },

  updateProduct: async (id, data) => {
    const response = await fetch(`${API_URL}/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update product');
    
    try {
      return await response.json();
    } catch {
      return { success: true };
    }
  }
};
