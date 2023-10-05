import { QuestionListItem } from '@/components';

import { QuestionsListProps } from './QuestionsList.props';

const QuestionsList: React.FC<QuestionsListProps> = ({
  data: { questions, aria },
}) => {
  return (
    <ul className="flex flex-col gap-4 md:mx-auto md:w-[560px] xl:mx-0">
      {questions.map((item, index) => {
        return (
          <QuestionListItem
            key={`${item.question}${index}`}
            item={item}
            index={index}
            aria={aria}
          />
        );
      })}
    </ul>
  );
};

export default QuestionsList;