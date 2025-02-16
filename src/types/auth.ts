import { User } from './user';

export type AuthContextTypeProps = {
  isLoading: boolean;
  user?: User | null;
  onUserChange: (user: User | null) => void;
};

export type LoginPayload = {
  username: string;
};

export type LoginResponse = User;

export type LogoutPayload = {
  userId?: string;
};
