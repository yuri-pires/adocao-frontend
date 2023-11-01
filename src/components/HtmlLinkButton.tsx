import clsx from 'clsx';
import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
}

export default function HtmlLinkButton({
  children,
  variant = 'primary',
  className,
  ...rest
}: Props) {
  return (
    <a
      className={clsx(
        'px-9 py-2 rounded-full text-white font-bold transition-all',
        {
          'bg-primary hover:bg-primary-hover': variant == 'primary',
          'bg-secondary hover:brightness-105': variant == 'secondary',
        }
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
