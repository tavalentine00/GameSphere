import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '48608c31d02b4fe59c37e41a98a5c8f9',
  },
});
