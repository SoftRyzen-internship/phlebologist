import classNames from 'classnames';

import css from './TreatmentTabButton.module.css';

const TreatmentTabButton = ({ variant, data, selected }) => {
  const { name, description, slideNum, more } = data;

  const boxStyles = classNames(
    'cursor-pointer rounded-xl',
    'py-3 px-4 md:py-6 md:px-9 md:min-h-[131px] md:h-full',
    'xl:h-[212px] xl:w-[282px] xl:relative xl:p-6',
    {
      'bg-gray-light xl:bg-white-light xl:hover:bg-gray-light':
        variant === 'light',
      'bg-primary-dark-400 text-white text-black-dark': variant === 'dark',
    },
    'transition-all duration-300 ease-in',
    css.box,
  );

  return (
    <div className={boxStyles}>
      <span className="text-xs font-normal tracking-[-0.48px] smOnly:hidden">
        {slideNum}
      </span>
      <h3
        className="font-medium, leading-5, text-lg tracking-[-0.72] 
          md:mt-5 md:text-xl md:leading-6 md:tracking-[-0.8px]"
      >
        {name}
      </h3>
      <p
        className={classNames(
          'absolute bottom-6 left-6 w-[234px] opacity-100 transition-all duration-300 notXl:hidden',
          css.text,
          { '!block !opacity-100': selected },
        )}
      >
        {description}
      </p>
      <span
        className={classNames(
          'absolute bottom-6 left-6 opacity-0 transition-all duration-300 notXl:hidden',
          css.more,
          { '!hidden': selected },
        )}
      >
        {more}
      </span>
    </div>
  );
};

export default TreatmentTabButton;
