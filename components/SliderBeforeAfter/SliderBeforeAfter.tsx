'use client';

import React from 'react';

import ReactCompareImage from 'react-compare-image';

import SliderBeforeAfterHandle from '../SliderBeforeAfterHandle/SliderBeforeAfterHandle';
// import css from './SliderBeforeAfter.module.css';

const SliderBeforeAfter = () => {
  const before = 'images/before-after/1.jpg';
  const after = 'images/before-after/2.jpg';

  return (
    <ReactCompareImage
      leftImage={before}
      leftImageCss={{ objectPosition: 'right', width: 320 }}
      leftImageAlt="Before Image"
      rightImage={after}
      rightImageCss={{ objectPosition: 'right', width: 320 }}
      rightImageAlt="After Image"
      handle={<SliderBeforeAfterHandle />}
      sliderLineWidth={3}
      sliderLineColor="#ECEEF2"
    />
  );
};

export default SliderBeforeAfter;
