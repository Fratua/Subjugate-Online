```javascript
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
    localStorage.setItem('jwtToken', token);
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('jwtToken');
  }
};

export const loginUser = userData => {
  return axios
    .post('/api/users/login', userData)
    .then(res => {
      const { token } = res.data;
      setAuthToken(token);
      const decoded = jwt_decode(token);
      return decoded;
    })
    .catch(err => {
      throw err.response.data;
    });
};

export const registerUser = userData => {
  return axios
    .post('/api/users/register', userData)
    .then(res => res.data)
    .catch(err => {
      throw err.response.data;
    });
};

export const logoutUser = () => {
  setAuthToken(false);
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('jwtToken');
  if (!token) return false;
  const decoded = jwt_decode(token);
  const currentTime = Date.now() / 1000;
  return decoded.exp > currentTime;
};
```