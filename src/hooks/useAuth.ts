import { AuthContext } from '@/contexts/auth';
import { use } from 'react';

const useAuth = () => use(AuthContext);

export default useAuth;
