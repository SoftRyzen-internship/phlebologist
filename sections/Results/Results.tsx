import { FC } from 'react';

import { ResultsProps } from './Results.props';
import { Heading, Slider, ResultsSlide } from '@/components';

const slides = [
  { __typename: 2367289350 },
  { __typename: 2367289351 },
  { __typename: 2367289352 },
  { __typename: 2367289353 },
  { __typename: 2367289354 },
];

const Results: FC<ResultsProps> = ({
  staticData,
  iconData,
  className = '',
}) => {
  const { title } = staticData;
  return (
    <section className={className}>
      <div className="container">
        <div className="wrapper rounded-t-medium bg-white md:rounded-t-extraLarge xl:rounded-t-max">
          <Heading tag="h2" className="mb-5 md:mb-8 xl:mb-12">
            {title}
          </Heading>
          <Slider
            section="result"
            staticData={iconData}
            slide={ResultsSlide}
            slides={slides}
          />
        </div>
      </div>
    </section>
  );
};

export default Results;
