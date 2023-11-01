import clsx from 'clsx';
import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLAnchorElement> {
  size?: number;
  withCircle?: boolean;
}

export default function FooterIconLink({
  children,
  withCircle = false,
  size = 30,
  className,
  ...rest
}: Props) {
  return (
    <a
      className={clsx(`scale-100 transition-transform hover:scale-110`, {
        'border-2 border-white flex items-center justify-center rounded-full':
          withCircle,
      })}
      {...rest}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {children}
    </a>
  );
}
