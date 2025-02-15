import ENV from '@/configs/env';
import { io } from 'socket.io-client';

export const socket = io(ENV.SOCKET_URL);
