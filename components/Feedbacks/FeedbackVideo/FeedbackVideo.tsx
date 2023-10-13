'use client';

import ReactPlayer from 'react-player';

import setupVideoUrl from '@/utils/setupVideoUrl';

import { FeedbackVideoProps } from './FeedbackVideo.props';

const FeedbackVideo: React.FC<FeedbackVideoProps> = ({ data, isShown }) => {
  const transformedUrl = setupVideoUrl(data?.video);

  // aspect-[1/1.78] w-[240px]

  return (
    <div className="bg-cover-center overflow-hidden rounded-extended border-transparent">
      <ReactPlayer
        controls
        playing={isShown}
        // muted
        url="https://www.youtube.com/watch?time_continue=28&v=CMf0bJGuT90&embeds_referring_euri=https%3A%2F%2Fsoftryzen.com%2F&embeds_referring_origin=https%3A%2F%2Fsoftryzen.com&source_ve_path=MjM4NTE&feature=emb_title"
        config={{
          youtube: {
            playerVars: { origin: 'http://localhost:3000' },
          },
        }}
      />
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
