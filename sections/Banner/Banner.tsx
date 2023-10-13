import { FC } from 'react';

import { Heading, ButtonSecondary } from '@/components';
import { BannerProps } from './Banner.props';

const Banner: FC<BannerProps> = ({ staticData, className }) => {
  const { title, bottomText, buttonText } = staticData;

  return (
    <section id="banner" className={className}>
      <div className="container">
        <div className="wrapper banner-bg flex h-[647px] flex-col justify-between rounded-t-medium pb-[52px] pt-6 md:h-auto md:items-start md:gap-12 md:rounded-t-extraLarge md:pb-20 md:pt-[94px] xl:gap-16 xl:rounded-t-max xl:pb-[239px] xl:pt-[186px]">
          <Heading
            tag="h2"
            className="whitespace-pre-wrap text-center md:w-[360px] md:whitespace-normal md:text-left xl:w-[592px] xl:text-[64px] xl:!-tracking-[2.56px]"
            variant="main"
          >
            {title}
          </Heading>

          <div className="flex flex-col md:flex-col-reverse md:items-end md:gap-6 xl:gap-12 xl:pr-[136px]">
            <ButtonSecondary
              linkto="consultation"
              className="mx-auto mb-2 md:mx-0 md:mb-0 md:mr-auto xl:w-[183px] xl:!px-0 xl:hover:w-[186px] xl:focus:w-[186px]"
            >
              {buttonText}
            </ButtonSecondary>

            <p className="whitespace-pre-wrap text-center text-xs font-medium !leading-normal -tracking-[0.48px] text-white md:w-[290px] md:whitespace-normal md:text-start md:text-xl md:-tracking-[0.8px] xl:w-[530px] xl:text-left xl:text-2xl xl:-tracking-[0.96px]">
              {bottomText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
