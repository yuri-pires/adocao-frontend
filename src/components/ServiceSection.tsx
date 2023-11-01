import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

type ImageFocus =
  | 'object-right-top'
  | 'object-right'
  | 'object-right-bottom'
  | 'object-left-top'
  | 'object-left'
  | 'object-left-bottom'
  | 'object-bottom'
  | 'object-center'
  | 'object-top';

interface Props {
  action?: any;
  focusArea?: ImageFocus;
  imageOnLeft?: boolean;
  img: StaticImageData;
  text?: string;
  title?: string;
}

export default function ServiceSection({
  action,
  focusArea,
  imageOnLeft = false,
  img,
  text,
  title,
}: Props) {
  return (
    <section
      className={clsx({
        'bg-primary flex flex-col-reverse md:flex-row relative min-h-[45vh] items-center':
          true,
        'md:flex-row-reverse': imageOnLeft,
      })}
    >
      <div
        className={clsx({
          'md:w-5/12 flex h-full items-stretch': true,
          'justify-end': !imageOnLeft,
          'justify-start': imageOnLeft,
        })}
      >
        <div className='flex flex-col justify-center items-start px-8 py-14 gap-2 md:max-w-[533px]'>
          <h2 className='text-white font-bold text-5xl'>{title}</h2>
          <p className='text-white font-bold'>{text}</p>
          {action}
        </div>
      </div>
      <Image
        className={clsx(`${focusArea != undefined ? focusArea : ''}`, {
          'w-full md:w-7/12 h-full object-cover md:absolute top-0': true,
          'left-0': imageOnLeft,
          'right-0': !imageOnLeft,
        })}
        src={img}
        alt=''
      />
    </section>
  );
}
