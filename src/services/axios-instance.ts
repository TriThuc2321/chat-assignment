import ENV from '@/configs/env';
import type { AxiosError } from 'axios';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${ENV.API_URL}/api`,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.response.use(
  response => response.data,
  async (error: AxiosError) => Promise.reject(error.response?.data),
);

export default axiosInstance;
