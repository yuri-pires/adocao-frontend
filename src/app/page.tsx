import dogYellowBg from '@/assets/img/dog-yellow.jpg';
import logoPrefeitura from '@/assets/img/logo-prefeitura.png';
import logoUniversidade from '@/assets/img/logo-universidade.png';
import LinkButton from '@/components/LinkButton';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-black lg:bg-primary bg-opacity-60 lg:bg-opacity-100 min-h-screen w-full flex flex-col items-center'>
      <header className='lg:fixed top-0 left-0 w-full z-20'>
        <div className='container mx-auto'>
          <Navbar />
        </div>
      </header>

      <main className='w-full mx-auto flex flex-col lg:flex-row'>
        <div className='lg:w-[65vw] flex justify-end'>
          <div className='min-h-[calc(100vh_-_92px)] lg:min-h-screen p-6 lg:p-15 flex justify-between items-center flex-col gap-10'>
            <div className='flex flex-col gap-4 items-start flex-grow justify-center'>
              <h1 className='text-white text-5xl lg:text-5xl font-bold tracking-wider'>
                Adoção
                <br />
                consciente
              </h1>
              <h2 className='text-white text-xl lg:text-xl font-bold'>
                Sistema de adoção público da Cidade de Canoas
              </h2>
              <LinkButton href='/adote'>Adote</LinkButton>
            </div>

            <div className='flex py-2 lg:py-0 gap-8 justify-center items-center bg-white lg:bg-transparent rounded'>
              <Image
                src={logoPrefeitura}
                alt='Prefeitura de Canoas'
                className='object-contain w-3/12'
              />
              <Image
                src={logoUniversidade}
                alt='Universidade LaSalle'
                className='object-contain w-3/12'
              />
            </div>
          </div>
        </div>

        <Image
          src={dogYellowBg}
          alt=''
          className='lg:w-[35vw] h-screen fixed right-0 top-0 -z-10 lg:z-10 w-full object-cover object-left-bottom'
          priority
        />
      </main>
    </div>
  );
}
