'use client';

import imgLogoPrefeitura from '@/assets/img/logo-prefeitura-branco.png';
import imgLogosTransparencia from '@/assets/img/logos-footer.png';
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { Chat, ExclamationCircle, Search } from 'react-bootstrap-icons';
import FooterIconLink from './FooterIconLink';

const admnistracaoTransparenteLinks = [
  {
    id: 1,
    href: 'https://www.canoas.rs.gov.br/sistemafalabr/',
    title: 'Ouvidoria Municipal Fala.BR',
    icon: <Chat className='w-full h-full object-contain' />,
  },
  {
    id: 2,
    href: 'http://sistemas.canoas.rs.gov.br/transparencia/servlet/wmpedido',
    title: 'Acesso a informação',
    icon: <ExclamationCircle className='w-full h-full object-contain' />,
  },
  {
    id: 3,
    href: 'http://sistemas.canoas.rs.gov.br/transparencia/servlet/home',
    title: 'Administração transparente',
    icon: <Search className='w-full h-full object-contain' />,
  },
];

const conectesePrefeituraLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com/PrefeituradeCanoas/',
    title: 'Ir para o Facebook da Prefeitura de Canoas',
    icon: <FontAwesomeIcon icon={faFacebookF} className='block w-4 h-4 p-2' />,
  },
  {
    id: 2,
    href: 'https://twitter.com/prefcanoas',
    title: 'Ir para o Twitter da Prefeitura de Canoas',
    icon: <FontAwesomeIcon icon={faXTwitter} className='block w-4 h-4 p-2' />,
  },
  {
    id: 3,
    href: 'https://www.youtube.com/channel/UCZlcloYk5makcx8HCCTIzwQ',
    title: 'Ir para o Youtube da Prefeitura de Canoas',
    icon: <FontAwesomeIcon icon={faYoutube} className='block w-4 h-4 p-2' />,
  },
  {
    id: 4,
    href: 'https://www.instagram.com/prefcanoas/',
    title: 'Ir para o Instagram da Prefeitura de Canoas',
    icon: <FontAwesomeIcon icon={faInstagram} className='block w-4 h-4 p-2' />,
  },
];

export default function Footer() {
  return (
    <footer className='bg-primary text-white'>
      <div className='container mx-auto p-5 flex flex-wrap items-center justify-center gap-8'>
        <Image alt='' src={imgLogoPrefeitura} className='w-[220px]' />

        <section className='w-[220px]'>
          <h4 className='font-bold text-sm mb-4'>Administração transparente</h4>
          <div className='flex items-center gap-2 justify-center flex-grow'>
            {admnistracaoTransparenteLinks.map((link) => {
              return (
                <FooterIconLink
                  key={link.id}
                  href={link.href}
                  title={link.title}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {link.icon}
                </FooterIconLink>
              );
            })}
          </div>
        </section>

        <section className='w-[220px]'>
          <h4 className='font-bold text-sm mb-4'>
            Conecte-se com a prefeitura
          </h4>
          <div className='flex items-center gap-2 justify-center flex-grow'>
            {conectesePrefeituraLinks.map((link) => {
              return (
                <FooterIconLink
                  key={link.id}
                  href={link.href}
                  title={link.title}
                  target='_blank'
                  rel='noopener noreferrer'
                  size={35}
                  withCircle
                >
                  {link.icon}
                </FooterIconLink>
              );
            })}
          </div>
        </section>

        <section className='w-[220px] flex flex-col justify-center items-center text-center'>
          <h4 className='font-bold text-sm mb-4'>
            Central de Atendimento ao Cidadão
          </h4>
          <a href='tel:08005101234' className='font-bold text-2xl'>
            0800-5101234
          </a>
        </section>

        <section className='w-[220px] flex flex-col justify-center items-center text-center gap-2'>
          <Image
            src={imgLogosTransparencia}
            alt='Selo Transparência Prefeitura de Canoas'
            title='Prefeitura de Canoas'
          />
          <a
            href='https://www.canoas.rs.gov.br/politica-de-privacidade/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-lg'
          >
            Políticas de privacidade
          </a>
        </section>
      </div>

      <section className='bg-white text-black text-center flex justify-center p-3'>
        <p className='text-xs italic'>
          &copy; {new Date().getFullYear()} Prefeitura Municipal de Canoas.
          Todos os direitos reservados.
        </p>
      </section>
    </footer>
  );
}
