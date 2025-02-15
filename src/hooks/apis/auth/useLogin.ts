import { useAuth } from '@/hooks';
import { authApi } from '@/services';
import { ErrorResponse } from '@/types/common';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const useLogin = () => {
  const { onUserChange } = useAuth();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: user => {
      toast.success('Login successful');
      onUserChange(user);
    },
    onError: (error: ErrorResponse) => {
      toast.error(error.error);
    },
  });
};

export default useLogin;
