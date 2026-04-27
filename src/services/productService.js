import apiClient from '../apiClient';
export const productService = {
  getAllProducts: async () => {
    const response = await apiClient.get(
      `/api/manufacturer/products?manufacturerId=${localStorage.getItem("roleId")}`
    );
    return response.data;
  },

  getProductById: async (id) => {
    const response = await apiClient.get(`/api/products/${id}`);
    return response.data;
  },

  addProduct: async (data) => {
    const payload = {
      productName: data.name,
      category: data.category,
      price: data.price,
      warrantyType: data.warranty,
      description: data.description,
      manufacturerId: localStorage.getItem("roleId")
    };

    try {
      const response = await apiClient.post(`/api/manufacturer/create-product`, payload);
      return response.data || { success: true, product: payload };
    } catch (error) {
      const errorData = error.response?.data;
      throw new Error(
        (errorData?.errors ? Object.values(errorData.errors).join(", ") : undefined) ||
        errorData?.message ||
        'Failed to create product'
      );
    }
  },

  updateProduct: async (id, data) => {
    try {
      const response = await apiClient.put(`/api/products/${id}`, data);
      return response.data || { success: true };
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update product');
    }
  }
};

