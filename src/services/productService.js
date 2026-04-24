import apiClient from '../apiClient';

export const productService = {
  getAllProducts: async () => {
    try {
      const response = await apiClient.get(`/api/manufacturer/products?manufacturerId=${localStorage.getItem("roleId")}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return []; // Fallback to avoid UI crashing while API is not ready
    }
  },

  getProductById: async (id) => {
    try {
      const response = await apiClient.get(`/api/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  addProduct: async (data) => {
    let payload = {
      productName: data.name,
      category: data.category,
      price: data.price,
      warrantyType: data.warranty,
      description: data.description,
      manufacturerId: localStorage.getItem("roleId")
    }
    
    console.log(payload)
    try {
      const response = await apiClient.post(`/api/manufacturer/create-product`, payload);
      return response.data || { success: true, product: payload };
    } catch (error) {
      const errorData = error.response?.data;
      throw new Error(
        (errorData?.errors ? Object.values(errorData.errors).join(", ") : undefined) ||
        errorData?.message ||
        'Failed to update vendor'
      );
    }
  },

  updateProduct: async (id, data) => {
    try {
      const response = await apiClient.put(`/api/products/${id}`, data);
      return response.data || { success: true };
    } catch (error) {
      console.error(error);
      throw new Error('Failed to update product');
    }
  }
};
