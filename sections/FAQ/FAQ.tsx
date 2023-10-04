import { Heading, ButtonTertiary, QuestionsList } from '@/components';

const FAQ = ({ staticData }) => {
  const { title, description, button, questions } = staticData;

  return (
    <section>
      <div className="main-container">
        <div className="wrapper rounded-t-medium bg-white pb-[90px] pt-8 xl:rounded-t-max">
          <Heading className="mb-8">{title}</Heading>
          <QuestionsList data={questions} />
          <p>{description}</p>
          <ButtonTertiary>{button}</ButtonTertiary>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
