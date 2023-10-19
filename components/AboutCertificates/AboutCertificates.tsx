import { FC } from 'react';

import { Slider, AboutCertificatesSlide } from '@/components';

import { AboutCertificatesProps } from './AboutCertificates.props';

const AboutCertificates: FC<AboutCertificatesProps> = ({ data, iconData }) => {
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
