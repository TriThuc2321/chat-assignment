import { SocketContext } from '@/contexts/socket';
import { use } from 'react';

const useSocket = () => use(SocketContext);

export default useSocket;
