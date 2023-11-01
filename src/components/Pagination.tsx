import PageButton from './PageButton';

interface Props {
  linkPrevious?: string;
  linkNext?: string;
  currentPage: number | string;
}

export default function Pagination({
  linkNext,
  linkPrevious,
  currentPage,
}: Props) {
  return (
    <section className='w-full flex items-center gap-2 justify-center px-2 pb-5 text-2xl font-bold'>
      <PageButton link={linkPrevious || ''} prev />
      <p>Página {currentPage}</p>
      <PageButton link={linkNext} />
    </section>
  );
}
