import Image from 'next/image';
import classNames from 'classnames';

import { TreatmentQAImageProps } from './TreatmentQAImage.props';

const TreatmentQAImage: React.FC<TreatmentQAImageProps> = ({ image, alt }) => {
  const sizes = classNames(
    'h-[148px] w-full',
    'md:h-[310px] md:w-[656px]',
    'xl:h-[560px] xl:w-[1192px]',
  );

  return (
    <div
      className={classNames(
        sizes,
        'mx-auto mb-8 rounded-medium md:mb-12 xl:mb-[64px]',
      )}
    >
      <Image
        src={image}
        alt={alt}
        width={1192}
        height={560}
        className={classNames(sizes, 'rounded-medium object-cover')}
        priority
        sizes="(max-width: 767px) 256px, (max-width: 1279px) 656px, 1192px"
      />
    </div>
  );
};

export default TreatmentQAImage;
