import axios from 'axios';

const HOST = process.env.REACT_HOST || 'localhost:3001';
const PROTOCOL = process.env.REACT_PROTOCOL || 'http';

const api = axios.create({
  baseURL: `${ HOST }://${ PROTOCOL }`,
});

export default api;