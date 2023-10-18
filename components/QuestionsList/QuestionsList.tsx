'use client';

import { useState } from 'react';
import { Tab } from '@headlessui/react';

import { QuestionListItem } from '@/components';

import { QuestionsListProps, QuestionsType } from './QuestionsList.props';

const QuestionsList: React.FC<QuestionsListProps> = ({
  data: { questions, aria },
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Tab.Group
        manual
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <Tab.List
          as={'ul'}
          className="flex flex-col gap-3 md:mx-auto md:w-[560px] md:gap-2 xl:mx-0 xl:gap-3"
        >
          {questions.map((item: QuestionsType, index: number) => (
            <QuestionListItem
              key={`${item.question}${index}`}
              data={item}
              index={index}
              aria={aria}
            />
          ))}
        </Tab.List>
      </Tab.Group>
    </>
  );
};

export default QuestionsList;
