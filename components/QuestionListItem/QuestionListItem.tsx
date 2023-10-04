'use client';

import { Disclosure, Transition } from '@headlessui/react';

const QuestionListItem = ({ item, index }) => {
  return (
    <Disclosure as={'ul'} defaultOpen={index === 0 ? true : false}>
      <Disclosure.Button className="py-2">{item.question}</Disclosure.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Disclosure.Panel className="text-gray-500">
          {item.answer}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};

export default QuestionListItem;
