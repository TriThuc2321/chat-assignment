import { EmptyMessage, Sidebar } from '@/components/chat';
import { Outlet, useParams } from 'react-router-dom';

export default function Chat() {
  const { id } = useParams();

  return (
    <div className="flex h-screen w-full gap-4 overflow-hidden p-4">
      <Sidebar />

      <div className="h-full w-full rounded-2xl bg-white">
        {id ? <Outlet /> : <EmptyMessage />}
      </div>
    </div>
  );
}
