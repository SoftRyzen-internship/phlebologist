import classNames from 'classnames';

import { MethodButton, InfoBlock, TreatmentTabImage } from '@/components';

import css from './TreatmentTabPanel.module.css';

const TreatmentTabPanel = ({ data, lang }) => {
  const {
    method: { id, name, info, image },
    button,
  } = data;

  const contentStyle = classNames(
    'flex flex-col gap-4 text-black-dark',
    css['grid-container'],
  );

  return (
    <div className="relative flex flex-col md:mb-10 md:gap-8 xl:mb-0 xl:gap-7">
      <TreatmentTabImage image={image} alt={name} />

      <div className={contentStyle}>
        {info.map((method, index) => (
          <div
            key={`${method.question}${index}`}
            className={`md:ml-[37px] md:w-[246px] ${css[`box-${index + 1}`]}`}
          >
            <InfoBlock
              config={{
                section: 'treatment',
                title: method.question,
                content: method.answer,
              }}
            />
          </div>
        ))}

        <MethodButton
          lang={lang}
          id={id}
          className={`${css['box-5']} mx-auto mb-6 mt-6 md:mb-0 md:mt-auto md:h-[51px]`}
        >
          {button}
        </MethodButton>
      </div>
    </div>
  );
};

export default TreatmentTabPanel;
