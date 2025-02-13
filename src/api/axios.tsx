import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
});

export default instance;
