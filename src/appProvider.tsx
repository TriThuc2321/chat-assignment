import { AuthProvider } from '@/contexts/auth';
import { HeroUIProvider } from '@heroui/system';
import { BrowserRouter } from 'react-router-dom';

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <HeroUIProvider>{children}</HeroUIProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
