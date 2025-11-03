import api from './apiClient';

export const fetchProducts = async () => {
  try {
    console.log('Fetching products from:', api.defaults.baseURL + '/api/products');
    const response = await api.get('/api/products');
    console.log('Products response:', response.data);
    return response.data;
  } catch (error) {
    const errorDetails = {
      message: error.message,
      code: error.code,
      stack: error.stack,
      response: {
        data: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers,
      },
      request: {
        url: error.config?.url,
        method: error.config?.method,
        baseURL: error.config?.baseURL,
        headers: error.config?.headers,
      }
    };
    console.error('Detailed API Error:', errorDetails);
    
    const errorMessage = error.code === 'ECONNABORTED' 
      ? 'Connection timeout - API server may be down'
      : error.response?.data?.message 
        || `Failed to fetch products (${error.message})`;
    throw new Error(errorMessage);
  }
};

export const fetchProductById = async (id) => {
  try {
  const response = await api.get(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch product');
  }
};