'use client';

import { FC } from 'react';

import { AdvantagesProps } from './Advantages.props';
import { Heading } from '@/components';

import { useWindowWidth } from '@/hooks';

const Advantages: FC<AdvantagesProps> = ({ staticData, className = '' }) => {
  const {
    title,
    mainQuestion,
    mainAnswer,
    advListMobile,
    advListTabletDesktop,
  } = staticData;
  const { isScreenMobile } = useWindowWidth();

  const advList = isScreenMobile ? advListMobile : advListTabletDesktop;

  return (
    <section className={className}>
      <div className="main-container bg-red-300">
        <div className="wrapper bg-blue-300">
          <Heading tag="h2" className="mb-6">
            {title}
          </Heading>
          <p className="mb-3 whitespace-pre-wrap bg-green-200 font-medium leading-normal -tracking-[0.64]">
            {mainQuestion}
          </p>
          <p className="mb-9 ml-auto whitespace-pre-wrap bg-violet-200 text-end text-xs leading-normal -tracking-[0.48]">
            {mainAnswer}
          </p>
          <ul>
            {advList.map(advItem => {
              return <li key={advItem.id}>Hello</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
