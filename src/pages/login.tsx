import { useAuth } from '@/hooks';
import { Button } from '@/libs/heroUI';

export default function Login() {
  const { onLogin } = useAuth();

  return (
    <div>
      <p>Login</p>
      <Button
        onClick={() => onLogin({ username: 'John Doe', online: true, id: '1' })}
      >
        Login
      </Button>
    </div>
  );
}
