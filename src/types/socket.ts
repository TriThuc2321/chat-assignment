import { ChatMessage } from './message';

export type SocketContextTypeProps = {
  isConnected: boolean;
  messages: ChatMessage[];
  sendMessage: (message: string) => void;
};

export type DataSocket<T> = {
  data: T;
  event: string;
};
