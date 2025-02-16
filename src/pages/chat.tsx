import { Sidebar } from '@/components/chat';
import { Outlet } from 'react-router-dom';

export default function Chat() {
  return (
    <div className="flex h-screen gap-4 overflow-hidden p-4">
      <Sidebar />
      <Outlet />
    </div>
  );
}
