import clsx from 'clsx';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

interface Props {
  link?: string;
  prev?: boolean;
}

export default function PageButton({ link, prev = false }: Props) {
  return (
    <Link
      href={link || ''}
      className={clsx('rounded-lg p-3 transition-colors', {
        'bg-gray-400 text-gray-300 opacity-60': !link,
        'bg-primary hover:bg-primary-hover text-white': link,
      })}
      title={prev ? 'Página anterior' : 'Próxima página'}
    >
      {prev ? <ArrowLeft /> : <ArrowRight />}
    </Link>
  );
}
