'use client';

import { usePathname } from 'next/navigation';
import NavbarLink from './NavbarLink';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='px-16 py-3 text-white font-bold flex-grow'>
      <ul className='flex justify-center lg:justify-end gap-4'>
        <li>
          <NavbarLink href='/adote' pathname={pathname}>
            Adote
          </NavbarLink>
        </li>
        <li>
          <NavbarLink href='/servicos' pathname={pathname}>
            Serviços
          </NavbarLink>
        </li>
      </ul>
    </nav>
  );
}
