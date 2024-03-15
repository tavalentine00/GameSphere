import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '8f9fe15e15cf4f46a7a30d13cdfa3608',
  },
});
