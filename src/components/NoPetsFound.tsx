import Image from 'next/image';
import imgIconeDogSacola from '@/assets/img/dog-bag.svg';

export default function NoPetsFound() {
  return (
    <section className='w-full h-full text-center font-bold text-3xl px-8 py-[25vh]'>
      <Image src={imgIconeDogSacola} alt='' className='w-32 mx-auto' />
      <h3>Nenhum pet encontrado</h3>
    </section>
  );
}
