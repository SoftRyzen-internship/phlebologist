'use client';

import { FC } from 'react';

import { AdvantagesProps } from './Advantages.props';
import { Heading, AdvantagesList, ButtonTertiary } from '@/components';
import { useWindowWidth } from '@/hooks';

const Advantages: FC<AdvantagesProps> = ({ staticData, className = '' }) => {
  const { isScreenMobile } = useWindowWidth();
  const { title, mainQuestion, advList, enrollText, buttonText } = staticData;

  return (
    <section className={className}>
      <div className="main-container">
        <div className="wrapper rounded-t-medium bg-gray-light pb-[132px] pt-8 md:pt-10 xl:pb-[122px] xl:pt-16">
          <Heading tag="h2" className="mb-6 md:mb-[41px] xl:mb-9">
            {title}
          </Heading>
          {isScreenMobile ? (
            <>
              <p className="mb-7 whitespace-pre-wrap font-medium leading-normal -tracking-[0.64px]">
                {mainQuestion}
              </p>
              <AdvantagesList advList={advList} />
              <p className="mb-6 whitespace-pre-wrap text-center text-sm leading-normal -tracking-[0.56]">
                {enrollText}
              </p>
              <ButtonTertiary
                isLink
                className="mx-auto bg-white focus:bg-white mediaHover:hover:bg-white"
                actionHandler={() =>
                  console.log('Clicked button in AdvantagesSection!')
                }
              >
                {buttonText}
              </ButtonTertiary>
            </>
          ) : (
            <div className="flex justify-between">
              <div className="flex flex-col justify-between">
                <p className="mb-0 whitespace-pre-wrap font-medium leading-normal -tracking-[0.64px] xl:text-xl">
                  {mainQuestion}
                </p>
                <div className="flex flex-col">
                  <p className="mb-6 w-[240px] text-start text-base leading-[1.5] -tracking-[0.64] xl:w-[391px] xl:text-xl xl:leading-[1.2] xl:-tracking-[0.8px]">
                    {enrollText}
                  </p>
                  <ButtonTertiary
                    isLink
                    className="mr-auto bg-white focus:bg-white xl:w-auto mediaHover:hover:bg-white"
                    actionHandler={() =>
                      console.log('Clicked button in AdvantagesSection!')
                    }
                  >
                    {buttonText}
                  </ButtonTertiary>
                </div>
              </div>
              <AdvantagesList advList={advList} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
