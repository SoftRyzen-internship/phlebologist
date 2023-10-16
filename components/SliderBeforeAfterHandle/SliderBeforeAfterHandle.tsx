import React from 'react';

const SliderBeforeAfterHandle = ({ staticData }) => {
  const { beforeHandleText, afterHandleText } = staticData;

  return (
    <div className="flex h-[21px] w-[95px] items-center justify-between rounded-[4px] bg-gray-light px-[11px] text-xs leading-[1.21] -tracking-[0.48px]">
      <span>{beforeHandleText}</span>
      <span>{afterHandleText}</span>
    </div>
  );
};

export default SliderBeforeAfterHandle;
