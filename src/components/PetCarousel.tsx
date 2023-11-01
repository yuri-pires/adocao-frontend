import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

interface Props {
  images: string[];
}

export default function PetCarousel({ images }: Props) {
  return (
    <Carousel
      defaultControlsConfig={{
        nextButtonText: <ArrowRight className='text-xl text-white' />,
        prevButtonText: <ArrowLeft className='text-xl text-white' />,
        nextButtonClassName: 'rounded-lg',
        prevButtonClassName: 'rounded-lg',
        containerClassName: 'bg-primary mx-2 rounded-lg',
      }}
      autoplay
      pauseOnHover
      renderBottomCenterControls={null}
      adaptiveHeightAnimation
      autoplayInterval={4000}
      wrapAround
    >
      {images.map((image) => {
        return (
          <div className='w-full h-auto' key={image}>
            <Image
              src={image}
              alt=''
              width={400}
              height={400}
              className='h-auto md:h-[400px] w-full rounded-lg shadow object-contain bg-white p-1'
              priority
            />
          </div>
        );
      })}
    </Carousel>
  );
}
