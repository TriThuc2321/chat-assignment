import { Message } from './message';
import { User } from './user';

export type SocketContextTypeProps = {
  isConnected: boolean;
  messages: Message[];
  sendMessage: (message: string) => void;
  usersOnline: User[];
};

export type DataSocket<T> = {
  data: T;
  event: string;
};
