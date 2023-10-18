import { FC } from 'react';

import { Heading, Slider, ResultsSlide } from '@/components';
import { fetchResults } from '@/api';
import { ResultsProps } from './Results.props';

const Results: FC<ResultsProps> = async ({ staticData, iconData, lang }) => {
  try {
    const data = await fetchResults(lang);
    const { title, secondaryTitle, buttonText, buttonTextMobile, slider } =
      staticData;

    return (
      <section id="results" className="-mt-5 md:-mt-8 xl:-mt-10">
        <div className="container">
          <div className="wrapper rounded-t-medium bg-white pb-[52px] pt-6 md:relative md:rounded-t-extraLarge md:pt-[67px] xl:rounded-t-max xl:pt-[135px]">
            <Heading
              tag="h2"
              className="mb-5 w-[260px] md:absolute md:top-10 md:mb-0 md:w-[500px] xl:top-16 xl:leading-[1]"
            >
              {title}
            </Heading>
            {data ? (
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
              />
            ) : null}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.log(error);
  }
};

export default Results;
