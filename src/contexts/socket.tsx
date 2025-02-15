import { socket } from '@/configs/socket';
import { useAuth } from '@/hooks';
import { Message } from '@/types/message';
import { DataSocket, SocketContextTypeProps } from '@/types/socket';
import { User } from '@/types/user';
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
  const { user } = useAuth();
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setMessages] = useState<Message[]>([]);
  const [usersOnline, setUsersOnline] = useState<User[]>([]);

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
    const onConnect = () => {
      console.log('Socket connected');
      setIsConnected(true);
    };

    const onDisconnect = () => {
      console.log('Socket disconnected');
      setIsConnected(false);
    };

    const onReceiveMessage = (value: DataSocket<Message>) => {
      setMessages(previous => [...previous, value.data]);
    };

    const onUsersOnline = (value: DataSocket<User>) => {
      setUsersOnline(previous => [...previous, value.data]);
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
        usersOnline,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
