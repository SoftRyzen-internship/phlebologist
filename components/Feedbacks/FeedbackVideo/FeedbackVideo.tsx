'use client';

import setupVideoUrl from '@/utils/setupVideoUrl';

import { FeedbackVideoProps } from './FeedbackVideo.props';

const FeedbackVideo: React.FC<FeedbackVideoProps> = ({ data }) => {
  const transformedUrl = setupVideoUrl(data?.video);

  return (
    <div className="bg-cover-center aspect-[1/1.78] w-[240px] overflow-hidden rounded-extended border-transparent">
      <iframe
        className="h-[101%] w-[101%] -translate-x-[2px] -translate-y-[2px] rounded-lg"
        src={transformedUrl}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default FeedbackVideo;
