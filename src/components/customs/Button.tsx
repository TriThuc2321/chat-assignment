import type { ButtonProps } from '@heroui/button';
import { Button } from '@heroui/button';
import classNames from 'classnames';
import type { MouseEventHandler } from 'react';

type MyButtonProps = ButtonProps & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
const MyButton = (props: MyButtonProps) => {
  const { className, variant, ...rest } = props;

  return (
    <Button
      className={classNames({ border: variant === 'bordered' }, className)}
      color="primary"
      variant={variant}
      {...rest}
    />
  );
};

export default MyButton;
