import { Heading, ButtonTertiary, QuestionsList } from '@/components';

const FAQ = ({ staticData }) => {
  const { title, description, button, questions } = staticData;

  return (
    <section className="p-10">
      <div className="main-container">
        <div className="wrapper">
          <Heading>{title}</Heading>
          <p>{description}</p>
          <ButtonTertiary>{button}</ButtonTertiary>
          <QuestionsList data={questions} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
