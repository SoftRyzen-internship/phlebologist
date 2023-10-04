import Image from 'next/image';

import { ErrorMessage } from '@/components';

import { AboutCertificatesProps } from './AboutCertificates.props';

const AboutCertificates: React.FC<AboutCertificatesProps> = ({ data }) => {
  if (!data) {
    return <ErrorMessage />;
  }

  return (
    <ul className="flex flex-wrap justify-center p-6">
      {data.map((item, index) => (
        <Image
          key={`${item.__typename}${index}`}
          src={item.photo}
          alt={item.description.alt}
          width={300}
          height={270}
        />
      ))}
    </ul>
  );
};

export default AboutCertificates;
