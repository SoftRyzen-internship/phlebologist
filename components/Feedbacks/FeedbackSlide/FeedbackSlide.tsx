'use client';

import classNames from 'classnames';
import { useState } from 'react';

import { FeedbackSlideProps } from './FeedbackSlide.props';

import {
  Modal,
  FeedbackCard,
  FeedbackFrame,
  FeedbackVideo,
} from '@/components';

const FeedbackSlide: React.FC<FeedbackSlideProps> = ({
  data,
  staticData,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const isVideo = true;

  return (
    <div
      className={classNames({
        'relative mx-auto h-[372px] w-full overflow-hidden rounded-extended bg-white-light text-[16px] leading-normal -tracking-[0.04em] text-black-dark md:h-[395px] md:w-[378px] xl:h-[405px] xl:w-full':
          true,
        [className ? className : '']: className,
      })}
    >
      {isVideo ? (
        <FeedbackFrame data={data} onClick={handleOpen} />
      ) : (
        <FeedbackCard data={data} onClick={handleOpen} />
      )}

      <Modal
        staticData={staticData}
        onCloseClick={() => setIsOpen(false)}
        isOpen={isOpen}
      >
        {isVideo ? (
          <FeedbackVideo data={data} />
        ) : (
          <FeedbackCard data={data} isModal />
        )}
      </Modal>
    </div>
  );
};

export default FeedbackSlide;
