import classnames from 'classnames';

import { Heading } from '@/components';

import { AboutGeneralProps } from './AboutGeneral.props';

const AboutGeneral: React.FC<AboutGeneralProps> = ({
  data,
  staticData: { firstSubtitle, secondSubtitle },
  lang,
}) => {
  const { name, profession, education, experience } = data;

  const professionTextClass = classnames(
    'mt-5 text-base font-medium uppercase md:mt-8 xl:mt-[64px] xl:text-xl',
    { 'w-full smOnly:max-w-[320px] md:w-[320px] xl:w-[400px]': lang === 'uk' },
    { 'w-full  md:w-[446px] xl:w-[540px]': lang === 'en' },
  );

  return (
    <div className="text-base font-normal tracking-[-0.64px] text-black-dark">
      <Heading variant="secondary" tag="h3">
        {name}
      </Heading>
      <p className={professionTextClass}>{profession}</p>

      <div className="mt-5 md:mt-7 md:flex md:gap-10 xl:mt-[70px] xl:flex-row-reverse xl:justify-end">
        <div className="md:min-w-[236px] smOnly:mb-5">
          <p className="mb-3 font-semibold uppercase md:mb-2 xl:mb-8">
            {firstSubtitle}
          </p>
          <ul className="flex flex-col gap-2 xl:gap-3">
            {experience &&
              experience.map((item, index) => (
                <li key={`${item.__typename}${index}`}>{item.point}</li>
              ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-semibold uppercase md:mb-2 xl:mb-8">
            {secondSubtitle}
          </p>
          <ul className="flex flex-col gap-2 md:w-[274px] xl:gap-3">
            {education &&
              education.map((item, index) => (
                <li key={`${item.__typename}${index}`}>{item.institution}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutGeneral;
