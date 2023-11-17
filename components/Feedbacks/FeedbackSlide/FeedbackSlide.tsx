'use client';

import classNames from 'classnames';
import { useState } from 'react';

import { FeedbackSlideProps } from './FeedbackSlide.props';

import { Modal, FeedbackCard, FeedbackFrame, VideoPlayer } from '@/components';

const FeedbackSlide: React.FC<FeedbackSlideProps> = ({
  data,
  staticData,
  optionalStaticData,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const isVideo = data.video ? true : false;

  return (
    <div
      className={classNames({
        'relative mx-auto h-full max-h-[372px] w-full overflow-hidden rounded-extended bg-white-light text-[16px] leading-normal -tracking-[0.04em] text-black-dark md:h-[395px] md:w-[378px] xl:h-[405px] xl:w-full':
          true,
        [className ? className : '']: className,
      })}
    >
      {isVideo ? (
        <FeedbackFrame
          data={data}
          onClick={handleOpen}
          staticData={optionalStaticData}
        />
      ) : (
        <FeedbackCard
          data={data}
          onClick={handleOpen}
          staticData={optionalStaticData}
        />
      )}

      <Modal
        staticData={staticData}
        onCloseClick={() => setIsOpen(false)}
        isOpen={isOpen}
        isReview
      >
        {isVideo ? (
          <VideoPlayer data={data.video} isShown={isOpen} isReview />
        ) : (
          <FeedbackCard data={data} isModal staticData={optionalStaticData} />
        )}
      </Modal>
    </div>
  );
};

export default FeedbackSlide;
