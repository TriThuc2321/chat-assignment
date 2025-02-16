import { Link, LinkProps } from 'react-router-dom';

type LinkIfProps = {
  to?: string | null;
} & Omit<LinkProps, 'to'>;

export default function LinkIf({ to, children, ...props }: LinkIfProps) {
  if (to === null || to === undefined) return children;

  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}
