import axios from 'axios';

const HOST = process.env.REACT_HOST || 'localhost:3001';
const PROTOCOL = process.env.REACT_PROTOCOL || 'http';

const api = axios.create({
  baseURL: `${PROTOCOL}://${HOST}`,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default api;
