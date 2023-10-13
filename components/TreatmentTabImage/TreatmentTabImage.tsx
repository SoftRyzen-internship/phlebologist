import Image from 'next/image';
import classNames from 'classnames';

import { TreatmentTabImageProps } from './TreatmentTabImage.props';

const TreatmentTabImage: React.FC<TreatmentTabImageProps> = ({
  image,
  alt,
}) => {
  const sizes = classNames(
    'smOnly:hidden',
    'md:h-[300px] md:w-[656px]',
    'xl:w-[560px]',
  );

  return (
    <div className={classNames(sizes, 'mx-auto mb-8 rounded-medium md:mb-0')}>
      <Image
        src={image}
        alt={alt}
        width={656}
        height={300}
        className={classNames(sizes, 'rounded-medium object-cover')}
        priority
        sizes="(max-width: 1279px) 656px, 560px"
      />
    </div>
  );
};

export default TreatmentTabImage;
