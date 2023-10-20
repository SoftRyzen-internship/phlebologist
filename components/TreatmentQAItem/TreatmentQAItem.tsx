import classNames from 'classnames';

import { TreatmentQAItemProps } from './TreatmentQAItem.props';

const TreatmentQAItem: React.FC<TreatmentQAItemProps> = ({ data }) => {
  const { question, answer } = data;

  const textStyles = classNames(
    'text-base font-normal leading-5 tracking-[-0.64px] text-black-dark',
  );

  return (
    <li className="xl:grid xl:grid-cols-2">
      <h3
        className="md:font:medium mb-6 text-xl font-semibold tracking-[-0.8px]
        text-black-dark md:w-[320px] md:text-2xl md:tracking-[-0.96px] xl:mb-0 xl:w-[419px]"
      >
        {question}
      </h3>

      <div className="md:ml-auto md:w-[319px] xl:w-[560px]">
        {answer.text && (
          <p className={classNames(textStyles, 'mb-4 md:mb-6')}>
            {answer.text}
          </p>
        )}

        {answer.subtext && (
          <p
            className={classNames(
              textStyles,
              'mb-2 font-semibold',
              'md:mb-3 md:text-lg md:tracking-[-0.72px]',
            )}
          >
            {answer.subtext}
          </p>
        )}

        <ul className="ml-6 list-outside list-disc">
          {answer.list.map((item: string, index: number) => (
            <li key={`${item}${index}`} className={textStyles}>
              {item}
            </li>
          ))}
        </ul>

        {answer.aftertext && (
          <p className={classNames(textStyles, 'mt-4 md:mt-6')}>
            {answer.aftertext}
          </p>
        )}
      </div>
    </li>
  );
};

export default TreatmentQAItem;
