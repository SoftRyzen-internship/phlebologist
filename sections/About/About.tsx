import Image from 'next/image';

import { fetchAbout } from '@/api';

import { AboutTabs, Heading, AboutVideo } from '@/components';

import { AboutDataType } from '@/types';

import { AboutProps } from './About.props';

const About: React.FC<AboutProps> = async ({ lang, staticData }) => {
  let data = staticData.fallback;

  try {
    const fetchData = await fetchAbout(lang);

    data = { ...(fetchData as AboutDataType) };
  } catch (error) {}

  const {
    title,
    firstSubtitle,
    secondSubtitle,
    menu,
    educationBtns,
    careerBtns,
  } = staticData.about;

  return (
    <section id="about" className="-mt-[30px] md:-mt-[52px] xl:-mt-[70px]">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="wrapper rounded-medium bg-white pb-[62px] pt-6 md:rounded-extraLarge md:pb-[96px] md:pt-10 xl:flex xl:items-baseline xl:gap-10 xl:rounded-max xl:pb-[142px] xl:pt-16"
        >
          <div className="xl:w-[592px] xl:min-w-[592px]">
            <Heading className="mb-6 md:mb-8 xl:mb-[48px]">{title}</Heading>
            {data?.video ? (
              <AboutVideo
                data={{
                  image: data.image,
                  video: data.video,
                }}
                staticData={staticData.iconData}
                lang={lang}
              />
            ) : (
              <Image
                src={data.image}
                alt={lang === 'uk' ? 'Фото лікаря' : 'Photo of the doctor'}
                width={592}
                height={480}
                sizes="(max-width: 767px) 256px, (max-width: 1279px) 416px, 592px"
                className="mb-5 rounded-medium object-cover object-top md:mx-auto md:mb-8 md:h-[338px] md:w-[416px] md:rounded-large xl:mb-0 xl:h-[480px] xl:w-[592px] smOnly:max-h-[272px] smOnly:w-full"
              />
            )}
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
            lang={lang}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
