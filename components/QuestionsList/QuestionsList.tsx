import { QuestionListItem } from '@/components';

const QuestionsList = ({ data }) => {
  return (
    <ul className="flex flex-col gap-4 md:mx-auto md:w-[560px] xl:mx-0">
      {data.map((item, index) => {
        return (
          <QuestionListItem
            key={`${item.question}${index}`}
            item={item}
            index={index}
          />
        );
      })}
    </ul>
  );
};

export default QuestionsList;
