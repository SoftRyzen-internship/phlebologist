'use client';

import { Tab } from '@headlessui/react';
import classNames from 'classnames';

import Arrow from '@/public/icons/faq-arrow.svg';

import { QuestionsListItemProps } from './QuestionListItem.props';
import css from './QuestionListItem.module.css';

const QuestionListItem: React.FC<QuestionsListItemProps> = ({
  data,
  index,
  aria,
}) => {
  return (
    <Tab key={`${data.question}${index}`} as={'li'} className={'outline-none'}>
      {({ selected }) => (
        <div
          className={classNames(
            'overflow-hidden rounded-extended p-4 text-black-dark outline-none md:px-6 md:py-5',
            {
              'max-h-[1000px] bg-gray-light': selected,
              'max-h-[88px] bg-white-light': !selected,
            },
            'transition-all duration-1000 ui-selected:outline-none',
          )}
        >
          <h3
            className={classNames(
              'flex gap-2 text-start text-base font-medium leading-5 tracking-[-0.64px]',
              'cursor-pointer md:text-xl md:leading-6 md:tracking-[-0.8px]',
            )}
          >
            <Arrow
              width={24}
              height={24}
              className={classNames(
                { 'rotate-[-90deg]': !selected },
                'transition-all duration-500',
              )}
              aria-label={aria}
            />
            {data.question}
          </h3>
          {selected && (
            <p
              className={classNames(
                'pt-4 text-sm font-normal leading-[18px] tracking-[-0.56px] outline-none',
                'md:text-justify md:text-base md:leading-6 md:tracking-[-0.64px]',
                { 'max-h-[1000px]': selected, 'max-h-[120px]': !selected },
                'transition duration-300',
                css.fade,
              )}
            >
              {data.answer}
            </p>
          )}
        </div>
      )}
    </Tab>
  );
};

export default QuestionListItem;
