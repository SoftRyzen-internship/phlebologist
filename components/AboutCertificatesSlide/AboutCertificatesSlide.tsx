'use client';

import { FC } from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import { AboutCertificatesSlideProps } from './AboutCertificatesSlide.props';

const AboutCertificatesSlide: FC<AboutCertificatesSlideProps> = ({
  data,
  className,
}) => {
  const {
    photo,
    description: { alt },
  } = data;

  const slideClass = classnames(
    'mx-auto w-full md:w-[500px] h-[200px] md:h-[352px] xl:mx-auto xl:w-[508px]',
    className,
  );

  return (
    <div className={slideClass}>
      <Image
        src={photo}
        alt={alt}
        width={256}
        height={200}
        className="mx-auto h-full w-auto rounded-medium md:rounded-large"
        sizes="(max-width: 767px) 256px, (max-width: 1279px) 499px, 499px"
      />
    </div>
  );
};

export default AboutCertificatesSlide;
