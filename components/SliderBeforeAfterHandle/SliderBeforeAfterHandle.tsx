import React from 'react';

const SliderBeforeAfterHandle = ({ page }) => {
  const { beforeHandleText, afterHandleText } =
    page.page.home.patient_results.slider;

  return (
    <div className="flex h-[21px] w-[95px] items-center justify-between rounded-[4px] bg-gray-light pl-[14px] pr-[9px] text-xs leading-[1.21] -tracking-[0.48px]">
      <span>{beforeHandleText}</span>
      <span>{afterHandleText}</span>
    </div>
  );
};

export default SliderBeforeAfterHandle;
