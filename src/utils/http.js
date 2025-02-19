import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// 1. Cấu hình lấy ra method get
export const getUsersSearch = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};
