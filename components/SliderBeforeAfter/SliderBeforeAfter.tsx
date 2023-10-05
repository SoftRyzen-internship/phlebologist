'use client';

import React from 'react';

import ReactCompareImage from 'react-compare-image';
import classnames from 'classnames';

import { SliderBeforeAfterProps } from './SliderBeforeAfter.props';
import { SliderBeforeAfterHandle } from '@/components';

const SliderBeforeAfter: React.FC<SliderBeforeAfterProps> = ({
  page,
  className = '',
}) => {
  // TODO get photos from Tina
  const before = 'images/before-after/1.jpg';
  const after = 'images/before-after/2.jpg';

  // TODO get ALT-text from Tina
  const { beforeAltText, afterAltText } = page.home.patient_results.slider;

  const sliderWrapperClass = classnames(
    'w-[256px] h-[380px] rounded-[20px] md:w-[320px] md:h-[497px] md:rounded-3xl xl:w-[560px] xl:h-[503px] bg-gray-light overflow-hidden',
    className,
  );

  return (
    <div className={sliderWrapperClass}>
      <ReactCompareImage
        leftImage={before}
        leftImageAlt={beforeAltText}
        rightImage={after}
        rightImageAlt={afterAltText}
        handle={<SliderBeforeAfterHandle page={page} />}
        sliderLineWidth={3}
        sliderLineColor="#ECEEF2"
      />
    </div>
  );
};

export default SliderBeforeAfter;
