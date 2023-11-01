import clsx from 'clsx';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  href: string;
  pathname: string;
}

export default function NavbarLink({ children, href, pathname }: Props) {
  return (
    <Link
      href={href}
      className={clsx({
        'py-2 px-5 scale-100 transition-transform hover:scale-95 inline-block rounded-full':
          true,
        'text-primary bg-white': pathname === href,
      })}
    >
      {children}
    </Link>
  );
}
