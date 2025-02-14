import * as yup from 'yup';

const VALIDATION_MESSAGE = {
  REQUIRED: 'This field is required',
};

export const loginSchema = yup.object({
  username: yup.string().required(VALIDATION_MESSAGE.REQUIRED),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
