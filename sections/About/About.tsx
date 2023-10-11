import Image from 'next/image';

import { fetchAbout } from '@/api';

import { AboutTabs, ErrorMessage, Heading } from '@/components';

import { AboutProps } from './About.props';

const About: React.FC<AboutProps> = async ({ lang, staticData }) => {
  try {
    const data = await fetchAbout(lang);

    const { title, firstSubtitle, secondSubtitle, menu } = staticData.about;

    return (
      // temp styles while the design is not final
      <section id="about" className="-mt-5 md:-mt-8 xl:-mt-10">
        <div className="container">
          <div className="wrapper rounded-t-medium bg-white pb-[52px] pt-6 md:rounded-t-extraLarge md:pb-[76px] md:pt-10 xl:rounded-t-max xl:pb-28 xl:pt-16">
            <Heading className="mb-6 md:mb-8">{title}</Heading>

            {/* set up image sizes & alt properly */}
            <Image
              src={data?.image as string}
              alt={''}
              width={324}
              height={265}
              className="mb-5 rounded-medium md:mb-8 md:rounded-large"
            />

            {/* this is an example: add proper conditions for video rendering */}
            {data?.video && <div>{data?.video}</div>}

            <AboutTabs
              staticData={{ menu, firstSubtitle, secondSubtitle }}
              iconData={staticData.iconData}
              data={data}
            />
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return <ErrorMessage />;
  }
};

export default About;
