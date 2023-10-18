'use client';

import Image from 'next/image';
import classNames from 'classnames';
import { animated, useTransition } from '@react-spring/web';

import { TreatmentTabImageProps } from './TreatmentTabImage.props';

const TreatmentTabImage: React.FC<TreatmentTabImageProps> = ({
  image,
  alt,
}) => {
  const sizes = classNames(
    'smOnly:hidden',
    'md:h-[300px] md:w-[656px]',
    'xl:h-[290px] xl:w-[560px]',
  );

  const transition = useTransition([image], {
    exitBeforeEnter: true,
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: {
      duration: 500,
    },
  });

  return (
    <>
      {transition(
        (style, item) =>
          item && (
            <animated.div
              className={classNames(
                sizes,
                'mx-auto mb-8 rounded-medium md:mb-0 xl:mx-0 xl:ml-[37px]',
              )}
              style={style}
            >
              <Image
                src={image}
                alt={alt}
                width={656}
                height={300}
                className={classNames(sizes, 'rounded-medium object-cover')}
                priority
                sizes="(max-width: 1279px) 656px, 540px"
              />
            </animated.div>
          ),
      )}
    </>
  );
};

export default TreatmentTabImage;
