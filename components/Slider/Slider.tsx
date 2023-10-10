'use client';

import 'keen-slider/keen-slider.min.css';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import classNames from 'classnames';

import { IconBtn } from '@/components';

import { SliderProps } from './Slider.props';

const Slider: React.FC<SliderProps> = ({
  slides,
  staticData,
  optionalStaticData = undefined,
  section,
  slide: Component,
  slideClassName,
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const resultConfig = {
    loop: true,
    defaultAnimation: { duration: 1000 },
    drag: section.toLowerCase() === 'result' ? false : true,
    slides: { origin: 'center' as 'center', perView: 1 },
    initial: 0,
    rubberband: false,
  };

  const feedbackConfig = {
    ...resultConfig,
    dragSpeed: 0.4,
    breakpoints: {
      '(min-width: 1280px)': {
        slides: { origin: 'center' as 'center', perView: 3, spacing: 29 },
      },
    },
  };

  const defaultConfig =
    section.toLowerCase() === 'result' || 'doctor'
      ? resultConfig
      : feedbackConfig;

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      ...defaultConfig,
      slideChanged() {
        if (instanceRef.current?.track.details.rel !== undefined)
          setActiveIdx(instanceRef.current.track.details.rel);
      },
    },
    [],
  );

  return (
    <div className="relative">
      <div
        className={classNames({
          'mb-[24px] flex items-center justify-center gap-[24px] ': true,
          'md:mb-[40px] md:justify-end xl:mb-[64px] xl:gap-[48px]':
            section.toLowerCase() !== 'doctor',
          'md:absolute md:left-[50%] md:top-[50%] md:z-10 md:-translate-x-[50%] md:gap-[528px] xl:gap-[726px]':
            section.toLowerCase() === 'doctor',
        })}
      >
        <IconBtn
          icon="arrow"
          variant={section}
          reverse
          iconFunction={staticData.arrowLeft.iconFunction}
          iconLabel={staticData.arrowLeft.iconLabel}
          onClick={() => instanceRef.current?.prev()}
        />
        <IconBtn
          icon="arrow"
          variant={section}
          iconFunction={staticData.arrowRight.iconFunction}
          iconLabel={staticData.arrowRight.iconLabel}
          onClick={() => instanceRef.current?.next()}
        />
      </div>

      <ul ref={sliderRef} className="keen-slider">
        {slides &&
          slides.map((slide, idx) => (
            <li
              key={`${slide.__typename}${idx}`}
              className="keen-slider__slide flex cursor-pointer"
            >
              <Component
                data={slide}
                staticData={staticData}
                optionalStaticData={optionalStaticData}
                className={slideClassName}
                currentSlideIdx={activeIdx + 1}
                totalQty={slides.length}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Slider;
