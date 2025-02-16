import { QUERY_KEY } from '@/constants/common';
import useAuth from '@/hooks/useAuth';
import { userApi } from '@/services';
import { useQuery } from '@tanstack/react-query';

const useGetUsersOnline = () => {
  const { user: currentUser } = useAuth();

  return useQuery({
    queryKey: [QUERY_KEY.USERS_ONLINE],
    queryFn: userApi.getUsersOnline,
    select: data => data.filter(user => user.id !== currentUser?.id),
  });
};

export default useGetUsersOnline;
