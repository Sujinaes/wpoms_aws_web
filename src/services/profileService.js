const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081';

export const profileService = {
  getManufacturerProfile: async (id) => {
    const response = await fetch(`${API_URL}/api/admin/manufacturer?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData?.message || 'Failed to fetch manufacturer profile');
    }

    return response.json();
  },

  getVendorProfile: async (id) => {
    const response = await fetch(`${API_URL}/api/vendor/get?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData?.message || 'Failed to fetch vendor profile');
    }

    return response.json();
  },

  getCustomerProfile: async (id) => {
    const response = await fetch(`${API_URL}/api/customer/view-customer?id=${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData?.message || 'Failed to fetch customer profile');
    }

    return response.json();
  }
};
