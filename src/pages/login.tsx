import logo from '@/assets/images/logo.png';
import { HandleAuthLayout } from '@/components/shared/layouts';
import { useAuth } from '@/hooks';
import { useLogin } from '@/hooks/apis/auth';
import { useLoginForm } from '@/hooks/forms';
import { Button, Input } from '@/libs/heroUI';
import { LoginFormData } from '@/schemas/loginSchema';
import { ReactNode } from 'react';

export default function Login() {
  const { register, handleSubmit, errors } = useLoginForm();
  const { onUserChange } = useAuth();
  const { mutateAsync: login, isPending } = useLogin();

  const onSubmit = async (payload: LoginFormData) => {
    login(payload, {
      onSuccess: user => {
        onUserChange(user);
      },
    });
  };

  return (
    <HandleAuthLayout>
      <div className="flex flex-col gap-4 bg-accent">
        <img
          alt="Logo"
          className="mx-auto bg-primary"
          height={72}
          src={logo}
          width={72}
        />
        <div>
          <h1 className="text-left text-xl font-bold text-typography sm:text-2xl">
            Welcome to Chat App
          </h1>
          <p className="text-sm text-typography">
            Stylishly Connect, Effortlessly Communicate
          </p>
        </div>

        <form className="flex flex-col gap-4" role="form">
          <Input
            isRequired
            label={'Username'}
            {...register('username')}
            errorMessage={errors.username?.message}
            isInvalid={!!errors.username}
            placeholder="Your username"
          />

          <Input
            isClearable={false}
            label="Password"
            placeholder="Your password"
            type="password"
          />

          <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-1">
              <p className="text-sm text-typography">
                Don&apos;t have an account?
              </p>
              <Button className="inline-block h-fit bg-transparent !p-0 text-left font-semibold text-primary">
                Register
              </Button>
            </div>
            <Button
              className="h-fit bg-transparent p-0 font-semibold text-primary"
              color="primary"
            >
              Forgot password?
            </Button>
          </div>

          <Button
            className="!mt-0 flex w-full items-center justify-center gap-2 bg-primary py-2 text-lg font-medium normal-case text-white"
            isLoading={isPending}
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Button>
        </form>
      </div>
    </HandleAuthLayout>
  );
}

interface IThirdPartyLoginButton {
  onClick: () => void;
  icon: ReactNode;
  title: string;
}
const ThirdPartyLoginButton = ({
  onClick,
  icon,
  title,
}: IThirdPartyLoginButton) => {
  return (
    <Button
      className="group flex h-10 w-full flex-auto flex-row items-center justify-center rounded-lg border-[0.5px] border-primary bg-transparent px-2 normal-case transition-all duration-300 ease-in-out hover:bg-background hover:bg-opacity-100 sm:w-1/2"
      onClick={onClick}
    >
      {icon}
      <p className="text-h5-regular px-2 text-typography">{title}</p>
    </Button>
  );
};
