import imgColeira from '@/assets/img/dog-collar.svg';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Página não encontrada | Adoção Consciente',
  description: 'A página que você está tentando acessar não existe!',
};

export default function NotFound() {
  return (
    <div className='flex flex-col min-h-screen bg-lightBg'>
      <Header noTransparency />
      <main className='flex-grow flex'>
        <div className='container mx-auto text-center font-bold text-5xl px-8 py-[20vh] flex flex-col items-center justify-center flex-grow'>
          <Image src={imgColeira} alt='' className='w-40' />
          <h2>Página não encontrada</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}
