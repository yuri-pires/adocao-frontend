import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  href: string;
}

export default function LinkButton({ href, children }: Props) {
  return (
    <Link
      href={href}
      className='px-9 lg:px-12 text-lg py-2 bg-secondary rounded-full text-white font-bold hover:brightness-105 transition-all'
    >
      {children}
    </Link>
  );
}
