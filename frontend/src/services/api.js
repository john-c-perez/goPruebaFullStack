import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getPosts = async (page = 0, size = 10) => {
  const response = await axios.get(`${API_BASE_URL}/posts`, {
    params: { page, size },
  });
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
  return response.data;
};

export const searchPosts = async (query, page = 0, size = 10) => {
  const response = await axios.get(`${API_BASE_URL}/posts/search`, {
    params: { q: query, page, size }
  });
  return response.data;
};