'use client';

import { FC, useState, useEffect } from 'react';

import { Heading, Slider, ResultsSlide } from '@/components';
import { fetchResults } from '@/api';
import { ResultsProps } from './Results.props';

const Results: FC<ResultsProps> = ({
  staticData,
  iconData,
  lang,
  className = '',
}) => {
  const [data, setData] = useState();
  const { title, secondaryTitle, buttonText, buttonTextMobile, slider } =
    staticData;

  useEffect(() => {
    const getData = async () => {
      try {
        const results = await fetchResults(lang);
        setData(results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [lang]);

  return data ? (
    <section id="results" className={className}>
      <div className="container">
        <div className="wrapper rounded-t-medium bg-white pb-[52px] pt-6 md:relative md:rounded-t-extraLarge md:pt-[67px] xl:rounded-t-max xl:pt-[135px]">
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
          />
        </div>
      </div>
    </section>
  ) : null;
};

export default Results;
