import Image from 'next/image';

import { fetchAbout } from '@/api';

import { AboutTabs, ErrorMessage, Heading } from '@/components';

import { AboutProps } from './About.props';

const About: React.FC<AboutProps> = async ({ lang, staticData }) => {
  try {
    const data = await fetchAbout(lang);

    const {
      title,
      firstSubtitle,
      secondSubtitle,
      menu,
      educationBtns,
      careerBtns,
    } = staticData.about;

    return (
      <section id="about" className="-mt-5 md:-mt-8 xl:-mt-10">
        <div className="container">
          <div className="wrapper xl: rounded-t-medium bg-white pb-[52px] pt-6 md:rounded-t-extraLarge md:pb-[76px] md:pt-10 xl:flex xl:items-baseline xl:gap-10 xl:rounded-t-max xl:pb-28 xl:pt-16">
            <div className="xl:min-w-[558px]">
              <Heading className="mb-6 md:mb-8 xl:mb-[48px]">{title}</Heading>

              <Image
                src={data?.image as string}
                alt={
                  lang === 'uk'
                    ? 'Лікар сидить за столом'
                    : 'The doctor is sitting at the table'
                }
                width={256}
                height={191}
                className="object-center-top mb-5 rounded-medium object-cover md:mx-auto md:mb-8 md:h-[338px] md:w-[416px] md:rounded-large xl:mb-0 xl:h-[480px] xl:w-full smOnly:w-full"
              />

              {/* this is an example: add proper conditions for video rendering */}
              {data?.video && <div>{data?.video}</div>}
            </div>
            <AboutTabs
              staticData={{
                menu,
                firstSubtitle,
                secondSubtitle,
                educationBtns,
                careerBtns,
              }}
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
