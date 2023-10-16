'use client';

import classNames from 'classnames';
import PlayIcon from '@/public/icons/player.svg';

import css from './FeedbackFrame.module.css';

import { FeedbackCap } from '@/components';

const FeedbackFrame = ({ data, staticData, onClick }) => {
  const url = `url(${data?.photo})`;

  return (
    <article
      style={{ backgroundImage: url }}
      className={classNames(
        {
          'absolute inset-0 bg-cover bg-center bg-no-repeat p-[16px] md:p-[36px] xl:p-[40px]':
            true,
        },
        css.frameBg,
      )}
      onClick={onClick}
    >
      <PlayIcon
        className="absolute left-[50%] top-[50%] z-10 h-[64px] w-[64px] -translate-x-[50%] -translate-y-[50%]"
        aria-label={staticData?.links?.video?.icon}
      />
      <FeedbackCap isVideo data={data} staticData={staticData} />
    </article>
  );
};

export default FeedbackFrame;
