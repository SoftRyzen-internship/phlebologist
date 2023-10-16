'use client';

import ReactPlayer from 'react-player';
import classNames from 'classnames';

import { VideoPlayerProps } from './VideoPlayer.props';
import css from './VideoPlayer.module.css';

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  data,
  isShown,
  isReview = false,
}) => {
  return (
    <div
      className={classNames(
        {
          'w-[240px] overflow-hidden rounded-extended border-transparent': true,
          'bg-cover-center aspect-[1/1.78] bg-gray-blur md:w-[298px]': isReview,
          'bg-cover-center aspect-[1.4/1] md:aspect-[1.98/1] md:w-[656px] xl:aspect-[2.06/1] xl:w-[1040px] smOnly:w-full':
            !isReview,
        },
        css.playerContainer,
      )}
    >
      <ReactPlayer
        controls
        playing={isShown}
        // muted
        url={data}
        config={{
          youtube: {
            playerVars: { origin: 'http://localhost:3000' },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
