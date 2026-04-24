import apiClient from '../apiClient';

export const authService = {
  registerManufacturer: async (data) => {
    console.log("manufacutreer details : ");
    console.log(data);
    try {
      const response = await apiClient.post('/api/admin/register-manufacturer', data);
      return response.data || { success: true };
    } catch (error) {
      const errorData = error.response?.data;
      throw new Error(
        (errorData?.errors && Object.values(errorData.errors).join(", ")) || 
        errorData?.message || 
        'Failed to register manufacturer'
      );
    }
  },

  registerVendor: async (data) => {
    console.log("vendor details : ");
    console.log(data);

    try {
      const response = await apiClient.post('/api/vendor/register', data);
      return response.data || { success: true };
    } catch (error) {
      const errorData = error.response?.data;
      console.log("error data " + JSON.stringify(errorData));
      throw new Error(
        (errorData?.errors && Object.values(errorData.errors).join(", ")) || 
        errorData?.message || 
        'Failed to register vendor'
      );
    }
  },

  registerCustomer: async (data) => {
    console.log("customer details : ");
    console.log(data);

    try {
      const response = await apiClient.post('/api/customer/register-customer', data);
      return response.data || { success: true };
    } catch (error) {
      const errorData = error.response?.data;
      throw new Error(
        (errorData?.errors && Object.values(errorData.errors).join(", ")) || 
        errorData?.message || 
        'Failed to register customer'
      );
    }
  },

  registerStaff: async (type, data) => {
    const STAFF_API = {
      vendor: '/api/vendor/create-staff', // Was `${API_URL}` - check original
      manufacturer: '/api/admin/manufacturer/create-staff' // Was `${API_URL}` - check original
    };

    console.log(`${type} staff details:`, data);

    try {
      let roleId = localStorage.getItem("roleId")

      if(type==="vendor"){
        data = {...data , vendorId :roleId}
      }else if(type == "manufacturer"){
        data = { ...data , manufacturerId: roleId}
      }
      console.log("payload : " , data) 
      const response = await apiClient.post(STAFF_API[type], data);
      return response.data || { success: true };  
    } catch (error) {
      const errorData = error.response?.data;
      throw new Error(
        (errorData?.errors && Object.values(errorData.errors).join(", ")) || 
        errorData?.message || 
        'Failed to register staff'
      );
    }
  },

  loginUser: async (data, role) => {
    console.log(`login attempt for ${role}:`, data);

    try {
      const response = await apiClient.post('/api/login', data);
      return response.data || { success: true };
    } catch (error) {
      const errorData = error.response?.data;
      throw new Error(
        (errorData?.errors && Object.values(errorData.errors).join(", ")) || 
        errorData?.message || 
        'Failed to log in'
      );
    }
  }
};
