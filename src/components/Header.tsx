'use client';

import Navbar from '@/components/Navbar';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Props {
  noTransparency?: boolean;
}

export default function Header({ noTransparency = false }: Props) {
  const [isTransparent, setIsTransparent] = useState<boolean>(true);

  const updateTransparency = () => {
    setIsTransparent(window.scrollY <= 92);
  };

  useEffect(() => {
    if (!noTransparency) {
      window.addEventListener('scroll', updateTransparency);
      () => window.removeEventListener('scroll', updateTransparency);
    }
  }, []);

  return (
    <header
      className={clsx({
        'w-full z-30 transition-colors ease-out': true,
        'fixed top-0 left-0': !noTransparency,
        'bg-transparent': isTransparent && !noTransparency,
        'bg-primary shadow': !isTransparent || noTransparency,
      })}
    >
      <div className='container mx-auto flex justify-between items-center flex-col md:flex-row'>
        <h1 className='font-bold pt-5 md:pl-16 md:py-5 lg:py-6 text-2xl text-white tracking-wider'>
          <Link href='/'>Adoção consciente</Link>
        </h1>
        <div className='flex justify-end'>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
