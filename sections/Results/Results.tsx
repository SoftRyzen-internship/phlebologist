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
    <section id="results" className="-mt-5 md:-mt-8 xl:-mt-10">
      <div className="container">
        <div className="wrapper rounded-t-medium bg-white pb-[52px] pt-6 md:relative md:rounded-t-extraLarge md:pb-[76px] md:pt-[67px] xl:rounded-t-max xl:pb-[112px] xl:pt-[135px]">
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
