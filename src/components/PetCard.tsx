import IPet from '@/interfaces/IPet';
import Image from 'next/image';
import { Trigger } from '@radix-ui/react-dialog';
interface Props {
  pet: IPet;
  onDetails?: () => void;
}

export default function PetCard({ pet, onDetails }: Props) {
  return (
    <div className='bg-white rounded-xl p-2 flex flex-col items-center gap-2 shadow-sm hover:shadow transition-shadow'>
      <Image
        src={pet.azureUrls[0]}
        alt={pet.nome}
        width={300}
        height={400}
        className='object-cover w-full h-[362px] rounded-xl'
        priority
      />
      <div className='flex-grow flex flex-col items-center justify-center gap-2'>
        <h3 className='text-primary font-bold text-2xl text-center'>
          {pet.nome}
        </h3>
        <p className='text-center text-sm font-bold line-clamp-2 px-1'>
          {pet.descricao}
        </p>
      </div>
      <Trigger
        type='button'
        className='px-8 py-2 bg-secondary rounded-full text-white font-bold'
        onClick={onDetails}
      >
        Ver detalhes
      </Trigger>
    </div>
  );
}
