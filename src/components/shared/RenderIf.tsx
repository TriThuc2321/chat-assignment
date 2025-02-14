import type { ReactNode } from 'react';

type RenderIfProps = {
  condition?: boolean | null;
  children: ReactNode;
};
export default function RenderIf({ children, condition }: RenderIfProps) {
  return condition ? children : null;
}
