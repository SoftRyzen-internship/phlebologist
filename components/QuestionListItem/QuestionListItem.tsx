'use client';

import {
  // Disclosure,
  // Transition,
  Tab,
} from '@headlessui/react';
import { animated, useTransition } from '@react-spring/web';
import classNames from 'classnames';

import Arrow from '@/public/icons/faq-arrow.svg';

import { QuestionsListItemProps } from './QuestionListItem.props';
// import css from "./QuestionListItem.module.css";

const QuestionListItem: React.FC<QuestionsListItemProps> = ({
  data,
  index,
  aria,
  isOpen,
  // toggleHandler,
  // selectedIndex
}) => {
  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    // leave: { opacity: 0 },
    config: { duration: 300 },
  });

  return (
    <Tab key={`${data.question}${index}`} as={'li'}>
      {({ selected }) => (
        <div
          className={classNames(
            'overflow-hidden rounded-extended p-4 text-black-dark md:px-6 md:py-5',
            { 'bg-gray-light': selected, 'bg-white-light': !selected },
            'transition-all duration-300',
          )}
        >
          <h3
            className={classNames(
              'flex gap-2 text-start text-base font-medium leading-5 tracking-[-0.64px]',
              'md:text-xl md:leading-6 md:tracking-[-0.8px]',
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
          {transition(
            style =>
              selected && (
                <animated.p
                  className={classNames(
                    'pt-4 text-sm font-normal leading-[18px] tracking-[-0.56px]',
                    'md:text-justify md:text-base md:leading-6 md:tracking-[-0.64px]',
                    'transition duration-300',
                  )}
                  style={style}
                >
                  {data.answer}
                </animated.p>
              ),
          )}
          {/* {selected && (
                    <p
                      className={classNames(
                        'pt-4 text-sm font-normal leading-[18px] tracking-[-0.56px]',
                        'md:text-base md:text-justify md:leading-6 md:tracking-[-0.64px]',
                        'transition duration-300',
                      )}
                    >
                      {data.answer}
                    </p>
                  )}    */}
        </div>
      )}
    </Tab>
    // <Disclosure
    //   key={openIndex}
    //   as={'li'}
    //   defaultOpen={index === openIndex ? true : false}
    //   className={classNames(
    //     'overflow-hidden rounded-extended p-4 md:py-5 md:px-6 text-black-dark',
    //     {'bg-gray-light' : isOpen, 'bg-white-light': !isOpen},
    //     'transition-all duration-300'
    //   )}
    // >
    //   {({ open = isOpen }) => (
    //     <>
    //       <Disclosure.Button
    //         className={classNames("flex gap-2 text-start text-base font-medium leading-5 tracking-[-0.64px]",
    //           "md:text-xl md:leading-6 md:tracking-[-0.8px]",
    //           {'bg-gray-light' : open, 'bg-white-light': !open},
    //           )}
    //         onClick={() => {
    //           toggleHandler(index)
    //         }}
    //       >
    //         <Arrow
    //           width={24}
    //           height={24}
    //           className={classNames({ 'rotate-[270deg]': !open })}
    //           aria-label={aria}
    //         />
    //         {item.question}
    //       </Disclosure.Button>

    //       <Transition
    //         show={open}
    //         enter="transition duration-300 transform"
    //         enterFrom="opacity-0 -translate-y-full"
    //         enterTo="opacity-100 translate-y-0"
    //         leave="transition duration-100 transform"
    //         leaveFrom="opacity-100 translate-y-0"
    //         leaveTo="opacity-0 -translate-y-full"
    //       >
    //         <Disclosure.Panel
    //           static
    //           className={classNames(
    //             'pt-4 text-sm font-normal leading-[18px] tracking-[-0.56px]',
    //             'md:text-base md:text-justify md:leading-6 md:tracking-[-0.64px]',
    //             'transition duration-300',
    //             {"css.roll": open},
    //             css.roll
    //           )}
    //         >
    //           {item.answer}
    //         </Disclosure.Panel>
    //       </Transition>
    //     </>
    //   )}
    // </Disclosure>
  );
};

export default QuestionListItem;
