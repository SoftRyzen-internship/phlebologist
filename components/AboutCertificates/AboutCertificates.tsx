import Image from 'next/image';
import { ErrorMessage } from '@/components';

const AboutCertificates = ({ data }) => {
  if (!data) {
    return <ErrorMessage />;
  }

  return (
    <ul>
      {data.map((item, index) => (
        <Image
          key={`${item.__typename}${index}`}
          src={item.photo}
          alt={item.description}
          width={300}
          height={270}
        />
      ))}
    </ul>
  );
};

export default AboutCertificates;
