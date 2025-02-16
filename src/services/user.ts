import { User } from '@/types/user';
import axiosInstance from './axios-instance';

const userApi = {
  getUsersOnline: async (): Promise<User[]> =>
    axiosInstance.get('/users/online'),
};

export default userApi;
