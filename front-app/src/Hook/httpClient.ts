import axios from 'axios';

const API_URL = 'https://mirori.gravity-zero.fr/api/';

const httpClient = axios.create({
  baseURL: `${API_URL}`,
  headers: { 'Content-Type': 'application/json' },
});

export default httpClient;