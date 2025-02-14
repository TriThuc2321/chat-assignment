'use client';

import { Textarea, type TextAreaProps } from '@heroui/input';

const MyTextarea = (props: TextAreaProps) => (
  <Textarea
    isClearable
    classNames={{
      base: 'w-full',
      inputWrapper: 'border-1 border-primary text-typography',
    }}
    labelPlacement="outside"
    variant="bordered"
    {...props}
  />
);

export default MyTextarea;
