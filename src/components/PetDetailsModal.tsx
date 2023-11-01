import IPet from '@/interfaces/IPet';
import * as Dialog from '@radix-ui/react-dialog';
import { XLg } from 'react-bootstrap-icons';
import Carousel from './PetCarousel';
import HtmlLinkButton from './HtmlLinkButton';

interface Props {
  pet?: IPet;
}

export default function PetDetailsModal({ pet }: Props) {
  if (!pet) return null;
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-slate-700 bg-opacity-60 w-screen h-screen fixed top-0 left-0 z-50 p-4 overflow-y-auto'>
        <Dialog.Content className='max-w-[1600px] mx-auto min-h-screen flex items-center justify-center'>
          <section className='bg-lightBg p-4 lg:p-6 rounded-lg shadow w-full min-w-[80%] md:w-auto flex flex-col gap-6'>
            <div className='flex justify-between gap-10'>
              <Dialog.Title className='text-primary text-3xl font-bold' asChild>
                <h2>{pet.nome}</h2>
              </Dialog.Title>
              <Dialog.Close className='text-xl bg-primary p-2 rounded-lg text-white transition-colors hover:bg-primary-hover'>
                <XLg title='Fechar' />
              </Dialog.Close>
            </div>

            <div className='flex flex-col gap-2 md:flex-row md:gap-4 items-start'>
              <div className='w-full md:w-7/12'>
                <Carousel images={pet.azureUrls} />
              </div>
              <div className='flex flex-col gap-1 w-full md:w-5/12'>
                <p className='bg-white rounded-lg p-3'>
                  <span className='font-bold'>Descrição:</span> {pet.descricao}
                </p>
                <p className='bg-white rounded-lg p-3'>
                  <span className='font-bold'>Idade:</span> {pet.idade}
                </p>
                <p className='bg-white rounded-lg p-3'>
                  <span className='font-bold'>Porte:</span> {pet.porte}
                </p>
                <p className='bg-white rounded-lg p-3'>
                  <span className='font-bold'>Sexo:</span> {pet.sexo}
                </p>
                <p className='bg-white rounded-lg p-3'>
                  <span className='font-bold'>Raça:</span> {pet.raca}
                </p>
              </div>
            </div>

            <div className='flex justify-center'>
              <HtmlLinkButton
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                variant='primary'
              >
                Formulário de adoção
              </HtmlLinkButton>
            </div>
          </section>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
