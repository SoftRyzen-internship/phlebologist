import Image from 'next/image';

import { fetchAbout } from '@/api';

import { AboutTabs, ErrorMessage, Heading } from '@/components';

import { AboutProps } from './About.props';

const About: React.FC<AboutProps> = async ({ lang, staticData }) => {
  try {
    const data = await fetchAbout(lang);

    const { title, firstSubtitle, secondSubtitle, menu } = staticData;

    return (
      // temp styles while the design is not final
      <section className="p-12">
        <Heading className="mb-6 md:mb-9">{title}</Heading>

        <Image
          src={data?.image as string}
          alt={''}
          width={324}
          height={265}
          className="mb-6 rounded-3xl"
        />

        <AboutTabs
          staticData={{ menu, firstSubtitle, secondSubtitle }}
          data={data}
        />
      </section>
    );
  } catch (error) {
    return <ErrorMessage />;
  }
};

export default About;
