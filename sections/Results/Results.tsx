import { FC } from 'react';

import { Heading, Slider, ResultsSlide } from '@/components';
import { fetchData } from '@/api';
import { ResultsProps } from './Results.props';

const Results: FC<ResultsProps> = async ({ staticData, iconData, lang }) => {
  const {
    title,
    secondaryTitle,
    buttonText,
    buttonTextMobile,
    slider,
    template,
  } = staticData;
  let data = template;
  let isTemplate = true;

  try {
    const results = await fetchData(lang, 'results');
    if (results) {
      data = results;
      isTemplate = false;
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <section id="results" className="-mt-[30px] md:-mt-[52px] xl:-mt-[70px]">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="wrapper rounded-medium bg-white pb-[62px] pt-6 md:relative md:rounded-extraLarge md:pb-[96px] md:pt-[67px] xl:rounded-max xl:pb-[142px] xl:pt-[135px]"
        >
          <Heading
            tag="h2"
            className="mb-5 w-[260px] md:absolute md:top-10 md:mb-0 md:w-[500px] xl:top-16 xl:leading-[1]"
          >
            {title}
          </Heading>

          <Slider
            section="result"
            staticData={iconData}
            optionalStaticData={{
              ...slider,
              secondaryTitle,
              buttonText,
              buttonTextMobile,
            }}
            slides={data}
            slide={ResultsSlide}
            isTemplate={isTemplate}
          />
        </div>
      </div>
    </section>
  );
};

export default Results;
