import { Sidebar } from '@/components/chat';
import { Outlet } from 'react-router-dom';

export default function Chat() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}
