'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

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
  const resultConfig = {
    loop: true,
    defaultAnimation: { duration: 1000 },
    drag: false,
    slides: { origin: 'center' as 'center', perView: 1 },
    initial: 0,
    rubberband: false,
  };

  const feedbackConfig = {
    ...resultConfig,
    drag: true,
    dragSpeed: 0.4,
    breakpoints: {
      '(min-width: 1280px)': {
        slides: { origin: 'center' as 'center', perView: 3, spacing: 29 },
      },
    },
  };

  const defaultConfig =
    section.toLowerCase() === 'result' ? resultConfig : feedbackConfig;

  const [sliderRef, instanceRef] = useKeenSlider({ ...defaultConfig }, []);

  return (
    <div>
      <div className="mb-[24px] flex items-center justify-center gap-[24px] md:mb-[40px] md:justify-end xl:mb-[64px] xl:gap-[48px]">
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
                staticData={optionalStaticData}
                className={slideClassName}
                currentSlideIdx={instanceRef.current?.track.details.abs}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Slider;
