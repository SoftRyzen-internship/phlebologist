'use client';

import { FC } from 'react';
import Image from 'next/image';
import classnames from 'classnames';

interface AboutCertificatesSlideProps {
  data: any;
  className: string;
}

const AboutCertificatesSlide: FC<AboutCertificatesSlideProps> = ({
  data,
  className,
}) => {
  const {
    photo,
    description: { alt },
  } = data;
  console.log(data);
  const slideClass = classnames(
    'mx-auto w-full md:w-[500px] h-[200px] md:h-[352px] xl:h-[480px] xl:w-[679px]',
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
      />
    </div>
  );
};

export default AboutCertificatesSlide;
