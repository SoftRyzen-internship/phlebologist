import classNames from 'classnames';

const TreatmentQAItem = ({ data }) => {
  const { question, answer } = data;

  const textStyles = classNames(
    'text-base font-normal leading-5 tracking-[-0.64px] text-black-dark',
  );

  return (
    <li className="xl:grid xl:grid-cols-2">
      <h3 className="mb-6 text-[20px] font-semibold tracking-[-0.8px] text-black-dark">
        {question}
      </h3>

      <div>
        {answer.text && (
          <p className={classNames(textStyles, 'mb-4')}>{answer.text}</p>
        )}

        {answer.subtext && (
          <p className={classNames(textStyles, 'mb-2 font-semibold')}>
            {answer.subtext}
          </p>
        )}

        <ul className="ml-6 list-outside list-disc">
          {answer.list.map((item, index) => (
            <li key={`${item}${index}`} className={textStyles}>
              {item}
            </li>
          ))}
        </ul>

        {answer.aftertext && (
          <p className={classNames(textStyles, 'mt-4')}>{answer.aftertext}</p>
        )}
      </div>
    </li>
  );
};

export default TreatmentQAItem;
