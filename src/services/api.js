const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function apiFetch(endpoint, options = {}) {
  const token = sessionStorage.getItem('token');

  const headers = {
    ...options.headers,
  };
  if(options.body){
    headers['Content-Type'] = 'application/json';
  }
  if(token){
    headers.Authorization = `Bearer ${token}`
  }
  const response = await fetch(`${API_URL}${endpoint}`,{
    ...options,
    headers,
  });
  const data = await response.json().catch(() => ({}));
  if(!response.ok){
    throw new Error(
      data.mensaje || `Error HTTP ${response.status}: ${response.statusText}`
    )
  }
  return data;
}