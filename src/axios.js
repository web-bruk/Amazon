import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-project-e92c5.cloudfunctions.net/api',
});

export default instance;