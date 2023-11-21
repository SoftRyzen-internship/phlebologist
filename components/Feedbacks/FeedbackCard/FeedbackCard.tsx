'use client';

import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { useWindowSize } from '@/utils/useWindowsSize';
import getTextFromTina from '@/utils/getStringFromTina';

import { FeedbackCap } from '@/components';

import { FeedbackCardProps } from './FeedbackCard.props';

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  data,
  staticData,
  isModal = false,
  onClick,
}) => {
  const [fullText, setFullText] = useState<string | undefined>('');
  const [showBtn, setShowBtn] = useState(false);

  const textRef = useRef<HTMLParagraphElement>(null);

  const { width } = useWindowSize();

  useEffect(() => {
    try {
      if (data.review?.isError) {
        throw new Error('no connection');
      }
      const tinaData = <TinaMarkdown content={data.review} />;
      const tinaArr = tinaData.props.content.children;
      const fullText = getTextFromTina(tinaArr);
      setFullText(fullText);
    } catch (error) {
      setFullText(data.review.template);
    }
  }, [data.review, data.review?.template]);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const isOverflowing = textElement.scrollHeight > textElement.clientHeight;
      setShowBtn(isOverflowing);
    }
  }, [width]);

  return (
    <div
      className={classNames({
        'h-full w-full ': true,
        'p-4 md:p-9 md:pb-12 xl:p-10': !isModal,
      })}
    >
      <FeedbackCap data={data} staticData={staticData} />

      <p
        ref={textRef}
        className={classNames({
          'mt-5 text-[14px] md:mt-[28px] md:text-[16px] xl:mt-[30px]': true,
          'mb-5 line-clamp-[10] md:line-clamp-[8] ': !isModal,
          'line-clamp-none overflow-y-auto notXl:h-[80%] notXl:pr-3': isModal,
        })}
      >
        {fullText}
      </p>

      {isModal || !showBtn ? null : (
        <button
          type="button"
          onClick={onClick}
          className="absolute bottom-4 left-[16px] border-b-[1px] border-b-secondary-dark text-[14px] text-secondary-dark transition-all duration-300  md:bottom-6 md:left-[36px] md:text-[16px] xl:bottom-[26px] xl:left-[40px] xl:border-b-black-dark xl:text-black-dark xl:hover:border-b-secondary-dark xl:hover:font-semibold xl:hover:text-secondary-dark xl:focus:border-b-secondary-dark xl:focus:font-semibold"
        >
          {staticData?.links?.read?.text}
        </button>
      )}
    </div>
  );
};

export default FeedbackCard;
