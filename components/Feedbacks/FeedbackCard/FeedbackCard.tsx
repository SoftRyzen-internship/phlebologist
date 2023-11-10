'use client';

import classNames from 'classnames';
import { useState, useEffect, useMemo } from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import checkTextLength from '@/utils/checkTextLength';
import getTextFromTina from '@/utils/getStringFromTina';

import { TextData } from '@/types';
import { FeedbackCap } from '@/components';

import { FeedbackCardProps } from './FeedbackCard.props';

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  data,
  staticData,
  isModal = false,
  onClick,
}) => {
  const defaultData = useMemo(() => {
    return {
      doesFit: false,
      text: '',
    };
  }, []);

  const [fullText, setFullText] = useState<string | undefined>('');
  const [textData, setTextData] = useState<TextData>(defaultData);

  useEffect(() => {
    try {
      if (data.review?.isError) {
        throw new Error('no connection');
      }
      const tinaData = <TinaMarkdown content={data.review} />;
      const tinaArr = tinaData.props.content.children;
      const fullText = getTextFromTina(tinaArr);
      setFullText(fullText);
      setTextData(checkTextLength(fullText));
    } catch (error) {
      setFullText(data.review.template);
      setTextData(checkTextLength(data.review?.template));
    }
  }, [data.review, data.review?.template, defaultData]);

  return (
    <div
      className={classNames({
        'h-full w-full ': true,
        'p-[16px] md:p-[36px] xl:p-[40px]': !isModal,
      })}
    >
      <FeedbackCap data={data} staticData={staticData} />

      <p
        className={classNames({
          'overflow-y-auto notXl:h-[70%] notXl:pr-3': isModal,
          'mt-[20px] text-[14px] md:mt-[28px] md:text-[16px] xl:mt-[30px]':
            true,
        })}
      >
        {isModal ? fullText : textData.text}
      </p>

      {isModal || textData.doesFit ? null : (
        <button
          type="button"
          onClick={onClick}
          className="absolute bottom-[30px] left-[16px] border-b-[1px] border-b-secondary-dark text-[14px] text-secondary-dark transition-all duration-300  md:bottom-[36px] md:left-[36px] md:text-[16px] xl:bottom-[40px] xl:left-[40px] xl:border-b-black-dark xl:text-black-dark xl:hover:border-b-secondary-dark xl:hover:font-semibold xl:hover:text-secondary-dark xl:focus:border-b-secondary-dark xl:focus:font-semibold"
        >
          {staticData?.links?.read?.text}
        </button>
      )}
    </div>
  );
};

export default FeedbackCard;
