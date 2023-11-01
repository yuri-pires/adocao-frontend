'use client';

import IPet from '@/interfaces/IPet';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import NoPetsFound from './NoPetsFound';
import Pagination from './Pagination';
import PetCard from './PetCard';
import PetDetailsModal from './PetDetailsModal';

export default function PetsListing() {
  const ITEMS_PER_PAGE = 12;

  const searchParams = useSearchParams();
  const pageParam = Math.floor(Number(searchParams.get('page')));
  const pageIndex: number =
    Number.isNaN(pageParam) || pageParam == 0 ? 1 : pageParam;

  const [pets, setPets] = useState<IPet[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('loading');

  const [selectedPet, setSelectedPet] = useState<IPet>();

  useEffect(() => {
    async function fetchData() {
      setStatus('loading');
      const [res, next] = await Promise.all([
        axios.get<IPet[]>('https://adocao-backend.vercel.app/pets', {
          params: {
            itemsPerPage: ITEMS_PER_PAGE,
            pageNumber: pageIndex,
          },
        }),
        axios.get<IPet[]>('https://adocao-backend.vercel.app/pets', {
          params: {
            itemsPerPage: ITEMS_PER_PAGE,
            pageNumber: pageIndex + 1,
          },
        }),
      ]);
      setHasNextPage(next.data.length > 0);
      setPets(res.data);
      setStatus('idle');
    }

    fetchData();
  }, [pageParam]);

  if (status == 'loading') return <Loading />;
  if (pets.length == 0) return <NoPetsFound />;
  return (
    <>
      <section className='container mx-auto px-6 py-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {pets.map((pet) => (
          <Dialog.Root key={pet.id}>
            <PetCard pet={pet} onDetails={() => setSelectedPet(pet)} />
            <PetDetailsModal pet={selectedPet} />
          </Dialog.Root>
        ))}
      </section>

      {pets.length > 0 && (
        <Pagination
          currentPage={pageIndex}
          linkPrevious={pageIndex > 1 ? `?page=${pageIndex - 1}` : undefined}
          linkNext={hasNextPage ? `?page=${pageIndex + 1}` : undefined}
        />
      )}
    </>
  );
}
