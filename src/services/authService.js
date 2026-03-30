const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081';

export const authService = {
  registerManufacturer: async (data) => {
    const response = await fetch(`${API_URL}/api/admin/register-manufacturer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Failed to register manufacturer');
    }
    
    // Sometimes response might be just text or json
    try {
        return await response.json();
    } catch {
        return { success: true };
    }
  },

  registerVendor: async (data) => {
    const response = await fetch(`${API_URL}/api/vendor/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Failed to register vendor');
    }
    
    try {
        return await response.json();
    } catch {
        return { success: true };
    }
  },

  registerCustomer: async (data) => {
    // Note: Customer endpoint expects 'passwordHash' instead of 'password'
    const payload = {
      ...data,
      passwordHash: data.password,
    };
    // remove the generic 'password' key to strictly match API expectations 
    delete payload.password;

    const response = await fetch(`${API_URL}/api/customer/register-customer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Failed to register customer');
    }
    
    try {
        return await response.json();
    } catch {
        return { success: true }; // Fallback for 200 OK without JSON body
    }
  }
};
