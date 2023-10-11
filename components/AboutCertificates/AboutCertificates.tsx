import { FC } from 'react';

import { ErrorMessage, Slider, AboutCertificatesSlide } from '@/components';

import { AboutCertificatesProps } from './AboutCertificates.props';

const AboutCertificates: FC<AboutCertificatesProps> = ({ data, iconData }) => {
  console.log(data);

  if (!data) {
    return <ErrorMessage />;
  }

  return (
    <Slider
      slides={data}
      staticData={iconData}
      section="doctor"
      slide={AboutCertificatesSlide}
    />
  );
};

export default AboutCertificates;
