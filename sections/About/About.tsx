import Image from 'next/image';

import { fetchAbout } from '@/api';

import { AboutTabs } from '@/components';

import { AboutProps } from './About.props';

const About: React.FC<AboutProps> = async ({ lang, staticData }) => {
  const data = await fetchAbout(lang);

  if (!data) {
    return;
  }

  const { title, menu } = staticData;

  return (
    <section>
      <h3 className="mt-8">{title}</h3>
      <Image
        src={data?.image as string}
        alt={''}
        width={250}
        height={250}
        className="mb-6"
      />

      <AboutTabs staticData={menu} data={data} />
    </section>
  );
};

export default About;
