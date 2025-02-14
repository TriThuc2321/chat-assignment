import { LOCAL_STORAGE_KEY } from '@/constants/common';
import { useLocalStorage } from '@/hooks';
import { AuthContextTypeProps } from '@/types/auth';
import { User } from '@/types/user';
import { createContext, ReactNode, useCallback } from 'react';

interface ProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextTypeProps>(
  {} as AuthContextTypeProps,
);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useLocalStorage<User | undefined | null>(
    LOCAL_STORAGE_KEY.USER,
  );

  const onLogin = useCallback((user: User) => {
    setUser(user);
  }, []);

  const onLogout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
