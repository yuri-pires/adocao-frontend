import imgIconeDogSacola from '@/assets/img/cat-food.svg';
import Image from 'next/image';

export default function Loading() {
  return (
    <section className='w-full h-full text-center font-bold text-3xl px-8 py-[25vh]'>
      <Image src={imgIconeDogSacola} alt='' className='w-32 mx-auto' />
      <h3>Carregando...</h3>
    </section>
  );
}
