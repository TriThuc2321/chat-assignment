import { socket } from '@/configs/socket';
import { QUERY_KEY } from '@/constants/common';
import { useAuth } from '@/hooks';
import { ChatMessage } from '@/types/message';
import { DataSocket, SocketContextTypeProps } from '@/types/socket';
import { User } from '@/types/user';
import { useQueryClient } from '@tanstack/react-query';
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

interface ProviderProps {
  children: ReactNode;
}

export const SocketContext = createContext<SocketContextTypeProps>(
  {} as SocketContextTypeProps,
);

export const SocketProvider = ({ children }: ProviderProps) => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [isConnected, setIsConnected] = useState(socket.connected);

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const sendMessage = useCallback(
    (message: string) => {
      socket.emit('message:send', {
        receiver: user,
        message,
      });
    },
    [user],
  );

  useEffect(() => {
    if (user && isConnected) {
      socket.emit('user:login', user.username);
    }
  }, [user, isConnected]);

  useEffect(() => {
    const onConnect = () => {
      console.log('Socket connected');
      setIsConnected(true);
    };

    const onDisconnect = () => {
      console.log('Socket disconnected');
      setIsConnected(false);
    };

    const onReceiveMessage = (value: DataSocket<ChatMessage>) => {
      setMessages(previous => [...previous, value.data]);
    };

    const onUsersOnline = (value: DataSocket<User[]>) => {
      queryClient.setQueryData([QUERY_KEY.USERS_ONLINE], () =>
        value.data.filter(onlUser => onlUser.id !== user?.id),
      );
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', onReceiveMessage);
    socket.on('usersOnline', onUsersOnline);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', onReceiveMessage);
      socket.off('usersOnline', onUsersOnline);
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        isConnected,
        messages,
        sendMessage,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
