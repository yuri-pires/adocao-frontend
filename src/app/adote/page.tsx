import imgDog from '@/assets/img/dog-transparent.png';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PetsListing from '@/components/PetsListing';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Adote | Adoção Consciente',
  description: 'Sistema de adoção público da Cidade de Canoas',
};

export default function page() {
  return (
    <div className='flex flex-col min-h-screen bg-lightBg'>
      <Header />
      <main className='flex-grow'>
        <section className='bg-secondary text-white font-bold'>
          <div className='container mx-auto relative pt-32 px-5 md:pb-10 md:px-36 md:py-28 overflow-hidden bg-secondary'>
            <div className='w-full h-[300px] md:absolute md:bottom-0 md:right-32 z-10 md:h-auto md:w-1/5 drop-shadow-[0_1px_5px_rgba(200,154,23,0.8)]'>
              <Image
                src={imgDog}
                alt=''
                className='h-full object-contain lg:max-h-[250px]'
                priority
              />
            </div>
            <div className='relative z-20 border-4 border-white rounded-t-lg border-b-0 shadow-lg p-5 md:shadow-none md:border-none md:p-0'>
              <h2 className='text-4xl mb-4 text-center md:text-left'>
                Adote com consciência!
              </h2>
              <p className='text-[#fdfeff] text-lg md:w-4/5 md:pr-2'>
                Adotar com consciência é dar amor e um lar a um ser que precisa,
                comprometendo-se com seu bem-estar para toda a vida. Respeite
                suas necessidades, ofereça cuidados e saiba que a adoção é uma
                responsabilidade nobre e gratificante. #AdoteComConsciência 🐾❤️
              </p>
            </div>
          </div>
        </section>

        <PetsListing />
      </main>
      <Footer />
    </div>
  );
}
