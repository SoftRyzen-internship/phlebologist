'use client';

import { Disclosure, Transition } from '@headlessui/react';
import classNames from 'classnames';

import Arrow from '@/public/icons/faq-arrow.svg';

import { QuestionsListItemProps } from './QuestionListItem.props';

const QuestionListItem: React.FC<QuestionsListItemProps> = ({
  item,
  index,
}) => {
  return (
    <Disclosure
      as={'li'}
      defaultOpen={index === 0 ? true : false}
      className="overflow-hidden rounded-extended bg-gray-light p-4 text-black-dark"
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            className="flex gap-2 bg-gray-light text-start 
              text-base font-medium leading-5 tracking-[-0.64px]
              md:text-xl md:leading-6 md:tracking-[-0.8px]"
          >
            <Arrow
              width={24}
              height={24}
              className={classNames({ 'rotate-[270deg]': !open })}
            />
            {item.question}
          </Disclosure.Button>

          <Transition
            show={open}
            enter="transition duration-300 transform"
            // enterFrom="opacity-0 -translate-y-full"
            // enterTo="visible opacity-100 translate-y-0"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-100 transform"
            // leaveFrom="opacity-100 translate-y-0"
            // leaveTo="opacity-0 -translate-y-full"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Disclosure.Panel
              static
              className={classNames(
                'pt-4',
                'text-justify text-sm font-normal leading-[18px] tracking-[-0.56px]',
                { 'm-h-0': !open, 'm-h-[1000px]': open },
                'transition duration-300',
                'md:text-base md:leading-6 md:tracking-[-0.64px]',
              )}
            >
              {item.answer}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default QuestionListItem;
