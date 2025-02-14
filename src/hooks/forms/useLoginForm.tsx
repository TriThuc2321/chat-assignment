import { type LoginFormData, loginSchema } from '@/schemas/loginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

interface ILoginForm {
  defaultValues?: LoginFormData;
}
const useLoginForm = (prop: ILoginForm = { defaultValues: undefined }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: prop.defaultValues,
  });

  return { register, handleSubmit, getValues, errors };
};

export default useLoginForm;
