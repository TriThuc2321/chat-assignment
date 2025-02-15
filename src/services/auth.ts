import { LoginPayload, LoginResponse, LogoutPayload } from '@/types/auth';
import axiosInstance from './axios-instance';

export const authApi = {
  login: async (payload: LoginPayload): Promise<LoginResponse> =>
    axiosInstance.post('/auth/login', payload),
  logout: async (payload: LogoutPayload): Promise<void> =>
    axiosInstance.post('/auth/logout', payload),
};
