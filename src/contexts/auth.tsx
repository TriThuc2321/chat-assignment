import { LOCAL_STORAGE_KEY } from '@/constants/common';
import { useLocalStorage } from '@/hooks';
import { AuthContextTypeProps } from '@/types/auth';
import { User } from '@/types/user';
import { createContext, ReactNode, useCallback, useState } from 'react';

interface ProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextTypeProps>(
  {} as AuthContextTypeProps,
);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useLocalStorage<User | undefined | null>(
    LOCAL_STORAGE_KEY.USER,
    undefined,
    {
      onInitCompleted: () => {
        setIsLoading(false);
      },
    },
  );

  const onUserChange = useCallback((user: User | null) => {
    setUser(user);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        user,
        onUserChange,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
