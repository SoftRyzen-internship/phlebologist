import classNames from 'classnames';

import { MethodButton, InfoBlock, TreatmentTabImage } from '@/components';

import css from './TreatmentTabPanel.module.css';

const TreatmentTabPanel = ({ data, lang }) => {
  const {
    method: { id, name, info, image },
    button,
  } = data;

  const contentStyle = classNames(
    'mb-10 flex flex-col gap-4 text-black-dark',
    'md:mb-0',
    css['grid-container'],
  );

  return (
    <div className="relative flex flex-col md:mb-10 md:gap-8 xl:mb-0 xl:gap-10">
      <TreatmentTabImage image={image} alt={name} />

      {/* === grid === */}
      <div className={contentStyle}>
        {info.map((item, index) => (
          <div
            key={`${item.question}${index}`}
            className={`md:ml-[37px] md:w-[246px] ${css[`box-${index + 1}`]}`}
          >
            <InfoBlock
              config={{
                section: 'treatment',
                title: item.question,
                content: item.answer,
              }}
            />
          </div>
        ))}

        <MethodButton
          lang={lang}
          id={id}
          className={`${css['box-5']} md:mb-0 md:mt-auto md:h-[51px]`}
        >
          {button}
        </MethodButton>
      </div>

      {/* === flex 1 - button absolute === */}
      {/* <ul 
        className='mb-10 flex flex-col gap-4 text-black-dark
          md:flex-wrap md:max-h-[250px] 
          md:mb-0
          '
      >
        {info.map((item, index) => (
          <li key={`${item.question}${index}`} className='w-[246px]'>
            <InfoBlock
              config={{
                section: 'treatment',
                title: item.question,
                content: item.answer,
              }}
            />
          </li>
        ))}
      </ul>

      <MethodButton lang={lang} id={id} className="md:absolute md:right-[46px] md:bottom-0 md:mb-0">
        {button}
      </MethodButton> */}

      {/* === flex 2 - button in the list === */}
      {/* <div 
        className='mb-10 flex flex-col gap-4 text-black-dark
          md:flex-wrap md:max-h-[250px] 
          md:mb-0
          '
      >
        {info.map((item, index) => (
          <div key={`${item.question}${index}`} className='w-[246px]'>
            <InfoBlock
              config={{
                section: 'treatment',
                title: item.question,
                content: item.answer,
              }}
            />
          </div>
        ))}

        <MethodButton lang={lang} id={id} className="md:mb-0 md:mt-3">
          {button}
        </MethodButton>
      </div> */}

      {/* === flex 3 - button outside === */}
      {/* <ul
        className="mb-10 flex flex-col gap-4 text-black-dark
          md:mb-0 md:max-h-[250px] 
          md:flex-wrap
          "
      >
        {info.map((item, index) => (
          <li key={`${item.question}${index}`} className="w-[246px]">
            <InfoBlock
              config={{
                section: 'treatment',
                title: item.question,
                content: item.answer,
              }}
            />
          </li>
        ))}
      </ul>

      <MethodButton
        lang={lang}
        id={id}
        className="md:mt-2 md:ml-auto md:mr-[22px]"
        // className="md:mt-2"
      >
        {button}
      </MethodButton> */}
    </div>
  );
};

export default TreatmentTabPanel;
