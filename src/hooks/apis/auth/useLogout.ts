import { useAuth } from '@/hooks';
import { authApi } from '@/services';
import { ErrorResponse } from '@/types/common';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const useLogout = () => {
  const { onUserChange, user } = useAuth();

  return useMutation({
    mutationFn: () => authApi.logout({ userId: user?.id }),
    onSuccess: () => {
      toast.success('Logout successful');
      onUserChange(null);
    },
    onError: (error: ErrorResponse) => {
      toast.error(error.error);
    },
  });
};

export default useLogout;
