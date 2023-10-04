import { QuestionListItem } from '@/components';

const QuestionsList = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <QuestionListItem
            key={`${item.question}${index}`}
            item={item}
            index={index}
          />
        );
      })}
    </>
  );
};

export default QuestionsList;
