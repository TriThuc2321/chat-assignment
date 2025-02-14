'use client';

import { Button } from '@/libs/heroUI';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Input, type InputProps } from '@heroui/input';
import { useState } from 'react';
import { RenderIf } from '../shared';

const MyInput = (props: InputProps) => {
  const [isShow, setIsShow] = useState(false);
  const { type, ...rest } = props;
  const handleToggle = () => setIsShow(prev => !prev);

  return (
    <Input
      isClearable
      classNames={{
        base: 'w-full',
        inputWrapper: 'border-1 border-primary text-typography',
      }}
      labelPlacement="outside"
      variant="bordered"
      {...props}
      endContent={
        <RenderIf condition={type === 'password'}>
          <Button
            isIconOnly
            aria-label="toggle password visibility"
            className="-mr-2"
            type="button"
            variant="light"
            onClick={handleToggle}
          >
            {!isShow ? (
              <EyeIcon className="text-xl" />
            ) : (
              <EyeSlashIcon className="text-xl" />
            )}
          </Button>
        </RenderIf>
      }
      type={type === 'password' ? (isShow ? 'text' : 'password') : type}
      {...rest}
    />
  );
};

export default MyInput;
