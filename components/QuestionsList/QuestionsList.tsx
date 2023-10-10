'use client';

import { useState } from 'react';
import {
  // Disclosure,
  Tab,
} from '@headlessui/react';
// import { animated, useTransition } from '@react-spring/web';
// import classNames from 'classnames';

// import Arrow from '@/public/icons/faq-arrow.svg';
import { QuestionListItem } from '@/components';

import { QuestionsListProps } from './QuestionsList.props';

const QuestionsList: React.FC<QuestionsListProps> = ({
  data: { questions, aria },
}) => {
  // const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const [test, setTest] = useState(false)

  // const toggleQuestion = (index: number) => {
  //   if (openIndex === index) {
  //     setOpenIndex(null);
  //   } else {
  //     setOpenIndex(index);
  //   }
  // };

  // const transition = useTransition(selected, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   config: { duration: 300 },
  // });

  return (
    <>
      {/* tabs */}
      <Tab.Group
        manual
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <Tab.List
          as={'ul'}
          className="flex flex-col gap-3 md:mx-auto md:w-[560px] md:gap-2 xl:mx-0 xl:gap-3"
        >
          {questions.map((item, index) => (
            <QuestionListItem
              key={`${item.question}${index}`}
              data={item}
              index={index}
              aria={aria}
              isOpen={index === selectedIndex}
              selectedIndex={selectedIndex}
            />
            // <Tab key={`${item.question}${index}`} as={'li'}>
            //   {({ selected }) => (
            //     <div className={classNames(
            //       'overflow-hidden rounded-extended p-4 md:py-5 md:px-6 text-black-dark',
            //       {'bg-gray-light' : selectedIndex === index, 'bg-white-light': selectedIndex !== index},
            //       'transition-all duration-300'
            //     )}>
            //       <h3
            //         className={classNames("flex gap-2 text-start text-base font-medium leading-5 tracking-[-0.64px]",
            //         "md:text-xl md:leading-6 md:tracking-[-0.8px]",
            //         // {'bg-gray-light' : open, 'bg-white-light': !open},
            //         )}
            //       >
            //         <Arrow
            //           width={24}
            //           height={24}
            //           className={classNames({ 'rotate-[-90deg]': !selected }, 'transition-all duration-500')}
            //           aria-label={aria}
            //         />
            //         {item.question}
            //       </h3>
            //       {selected && (
            //         <p
            //           className={classNames(
            //             'pt-4 text-sm font-normal leading-[18px] tracking-[-0.56px]',
            //             'md:text-base md:text-justify md:leading-6 md:tracking-[-0.64px]',
            //             'transition duration-300',
            //           )}
            //         >
            //           {item.answer}
            //         </p>
            //       )}
            //     </div>
            //   )}
            // </Tab>
          ))}
        </Tab.List>
      </Tab.Group>

      {/* <ul className="flex flex-col gap-3 md:mx-auto md:w-[560px] md:gap-2 xl:mx-0 xl:gap-3"> */}

      {/* simple */}
      {/* <Disclosure
        as={'li'}
        defaultOpen={true}
        className={classNames(
          'overflow-hidden rounded-extended p-4 md:py-5 md:px-6 text-black-dark bg-gray-extra',
          {'h-[64px]': !test, 'h-[200px]': test},
          'transition-all duration-500'
        )}
      >
        {({ open }) => (
          <>
            <Disclosure.Button
              className={classNames("flex gap-2 text-start text-base font-medium leading-5 tracking-[-0.64px]",
                "md:text-xl md:leading-6 md:tracking-[-0.8px]",
                )}
                onClick={() => setTest(prevState => !prevState)}
            >
              <Arrow
                width={24}
                height={24}
                className={classNames({ 'rotate-[-90deg]': !open }, 'transition-all duration-500')}
                aria-label={aria}
              />
              {questions[0].question}
            </Disclosure.Button>

              <Disclosure.Panel
                static
                className={classNames(
                  'pt-4 text-sm font-normal leading-[18px] tracking-[-0.56px]',
                  'md:text-base md:text-justify md:leading-6 md:tracking-[-0.64px]',
                  'transition duration-300',
                  // {'h-0': !open, 'h-[164px]': open},
                  // {"css.roll": open},
                )}
              >
                {questions[0].answer}
              </Disclosure.Panel>
          </>
        )}
      </Disclosure> */}

      {/* disclosure - open one at a time */}
      {/* {questions.map((item, index) => {
        return (
          <QuestionListItem
            key={`${item.question}${index}`}
            item={item}
            index={index}
            aria={aria}
            isOpen={index === openIndex}
            toggleHandler={toggleQuestion}
            openIndex={openIndex}
          />
        );
      })} */}
      {/* </ul> */}
    </>
  );
};

export default QuestionsList;
