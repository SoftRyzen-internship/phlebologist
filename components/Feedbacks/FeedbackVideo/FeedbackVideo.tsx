'use client';

import { FeedbackVideoProps } from './FeedbackVideo.props';

const FeedbackVideo: React.FC<FeedbackVideoProps> = ({ data }) => {
  return (
    <div className="bg-cover-center h-[401px] w-[240px] overflow-hidden rounded-extended border-transparent">
      <iframe
        className="h-[101%] w-[101%] -translate-x-[2px] -translate-y-[2px] rounded-lg"
        src="https://youtube.com/embed/FTQ-_9n2KV8?si=68-LZUb0GB0ZZy1y"
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default FeedbackVideo;
