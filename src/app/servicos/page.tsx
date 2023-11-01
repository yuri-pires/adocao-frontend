import imgAdocao from '@/assets/img/servicos/adocao.jpg';
import imgCirurgias from '@/assets/img/servicos/cirurgias.jpg';
import imgCuidados from '@/assets/img/servicos/cuidados.jpg';
import imgHero from '@/assets/img/servicos/hero.jpg';
import imgImportanica from '@/assets/img/servicos/importancia.jpg';
import imgResidencia from '@/assets/img/servicos/residencia.jpg';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HtmlLinkButton from '@/components/HtmlLinkButton';
import ServiceSection from '@/components/ServiceSection';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Serviços | Adoção consciente',
  description:
    'Descubra os serviços de oferecidos: adoção responsável, residência, cirurgias veterinárias e cuidados médicos.',
};

export default function page() {
  return (
    <>
      <Header />
      <main className='bg-primary min-h-screen'>
        <div className='relative top-0 left-0'>
          <Image
            src={imgHero}
            alt=''
            className='absolute top-0 left-0 z-0 w-full h-full object-cover'
            priority
          />
          <div className='bg-primary-semiTransparent flex flex-col justify-center items-center py-[200px] px-3 relative text-center gap-4 z-10'>
            <h2 className='text-4xl font-bold text-white'>Nossos serviços</h2>
            <p className='text-lg font-bold text-slate-100'>
              Prestamos os seguintes serviços para a comunidade de Canoas
            </p>
          </div>
        </div>
        <ServiceSection
          img={imgAdocao}
          imageOnLeft
          title='Adoção'
          text='Encontre o seu companheiro peludo perfeito para um lar amoroso'
          focusArea='object-right-top'
        />
        <ServiceSection
          action={
            <HtmlLinkButton
              href='https://www.canoas.rs.gov.br/departamentos/bemestaranimal/'
              target='_blank'
              rel='noopener noreferrer'
              variant='secondary'
            >
              Saiba mais
            </HtmlLinkButton>
          }
          img={imgResidencia}
          title='Feiras de adoção'
          text='Encontre seu amigo peludo nas feiras aos fins de semana, no local divulgado pela prefeitura'
        />
        <ServiceSection
          img={imgCirurgias}
          imageOnLeft
          title='Cirurgias'
          text='Realizamos procedimentos cirúrgicos para garantir a saúde e bem-estar dos animais adotados'
        />
        <ServiceSection
          img={imgCuidados}
          focusArea='object-right'
          title='Cuidados médicos'
          text='Fornecemos cuidados médicos abrangentes e dedicados para animais resgatados e adotados'
        />
        <section className='relative'>
          <Image
            src={imgImportanica}
            alt=''
            priority
            className='md:absolute top-0 left-0 z-0 h-full object-cover w-full object-right'
          />
          <div className='hidden md:block absolute z-10 top-0 left-0 w-full h-full bg-white bg-opacity-60'></div>
          <div className='container bg-slate-200 md:bg-transparent px-6 py-10 md:py-16 mx-auto relative z-20 min-h-screen flex items-center'>
            <div className='md:w-7/12 font-bold text-lg'>
              <h2 className='text-primary text-4xl text-center md:text-left md:text-5xl md:w-4/5 tracking-wider mb-6'>
                Importância da adoção
              </h2>
              <div className='flex flex-col gap-3'>
                <p>
                  Adotar um animal é um ato de amor, cuidado e compaixão que
                  oferece a eles uma chance de vida melhor, contribui para a
                  redução do abandono e enriquece vidas através de laços de
                  amizade inquebráveis.
                </p>
                <p>
                  Animais mais velhos trazem gratidão, estabilidade, menos
                  demanda energética, e a chance de salvar vidas duplamente. Ao
                  adotar um animal idoso, você está oferecendo um lar amoroso e
                  também liberando espaço nos abrigos para outros necessitados.
                </p>
                <p>
                  E, lembre-se, a idade não diminui a capacidade de amar.
                  Considere a adoção de um animal mais velho e seja parte de uma
                  história incrível de resgate e amor. Adote amor, adote um
                  animal mais velho!
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
