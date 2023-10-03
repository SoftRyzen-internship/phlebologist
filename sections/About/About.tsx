import Image from 'next/image';

import { fetchAbout } from '@/api';

import { AboutTabs, ErrorMessage } from '@/components';

import { AboutProps } from './About.props';

const About: React.FC<AboutProps> = async ({ lang, staticData }) => {
  try {
    const data = await fetchAbout(lang);

    const { title, menu } = staticData;

    return (
      // temp styles while the design is not final
      <section>
        {/* will be replaced with the Heading component */}
        <h2 className="mb-6 text-[32px] font-medium tracking-[-1.28px] text-black-dark">
          {title}
        </h2>

        <Image
          src={data?.image as string}
          alt={''}
          width={324}
          height={265}
          className="mb-6 rounded-3xl"
        />

        <AboutTabs staticData={menu} data={data} />
      </section>
    );
  } catch (error) {
    return <ErrorMessage />;
  }
};

export default About;
