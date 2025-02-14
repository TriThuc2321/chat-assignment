import { User } from './user';

export type AuthContextTypeProps = {
  user?: User | null;
  onLogin: (user: User) => void;
  onLogout: () => void;
};
