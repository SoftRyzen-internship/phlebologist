import { FC } from 'react';

import { HeroProps } from './Hero.props';
import { Heading, ButtonSecondary } from '@/components';

const Hero: FC<HeroProps> = ({ staticData, className }) => {
  const { title, topText, middleText, bottomText, buttonText } = staticData;
  return (
    <section className={className}>
      <div className="container">
        <div className="wrapper hero-bg flex h-[529px] flex-col justify-between rounded-t-medium bg-red-400 pb-12 pt-6 md:h-auto md:justify-center md:gap-12 md:rounded-t-extraLarge md:pb-[48px] md:pt-[65px] xl:h-[742px] xl:rounded-t-max xl:pb-[174px]">
          <div>
            <p className="mb-2 text-center text-xs font-light leading-normal -tracking-[0.48px] text-white md:mb-0 md:translate-x-6 md:text-xl md:-tracking-[0.8px] xl:-translate-x-8 xl:font-normal xl:leading-[1.45]">
              {topText}
            </p>
            <Heading
              tag="h1"
              variant="main"
              view="hero"
              className="mb-1 text-center md:mb-0 md:text-right"
            >
              {title}
            </Heading>
            <p className="whitespace-pre-wrap text-center text-xs font-light !leading-[1.21] -tracking-[0.48px] text-white md:ml-auto md:w-[320px] md:text-left md:text-xl md:-tracking-[0.8px] xl:w-auto xl:-translate-x-[84px] xl:whitespace-normal xl:text-right">
              {middleText}
            </p>
          </div>
          <div className="md:flex md:flex-col-reverse md:items-end md:gap-6 xl:gap-5 xl:pr-[136px]">
            <ButtonSecondary
              linkto=""
              view="hero"
              className="mx-auto mb-2 md:mx-0 md:mb-0 md:ml-auto"
            >
              {buttonText}
            </ButtonSecondary>
            <p className="whitespace-pre-wrap text-center text-xs font-normal !leading-normal -tracking-[0.48px] text-white md:w-[262px] md:whitespace-normal md:text-justify md:text-base md:-tracking-[0.64px] xl:w-[306px] xl:text-left xl:text-xl xl:-tracking-[0.8px]">
              {bottomText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
