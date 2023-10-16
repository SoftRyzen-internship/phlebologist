import { ErrorMessage, Heading } from '@/components';

import { AboutGeneralProps } from './AboutGeneral.props';

const AboutGeneral: React.FC<AboutGeneralProps> = ({
  data,
  staticData: { firstSubtitle, secondSubtitle },
}) => {
  if (!data) {
    return <ErrorMessage />;
  }

  const { name, profession, education, experience } = data;

  return (
    <div className="text-base font-normal tracking-[-0.64px] text-black-dark">
      <Heading variant="secondary" tag="h3">
        {name}
      </Heading>
      <p
        className="mt-5 w-[234px] font-medium uppercase
        leading-6 md:mt-8 xl:mt-[64px] xl:w-[296px] xl:text-xl"
      >
        {profession}
      </p>

      <div className="mt-5 md:mt-7 md:flex md:gap-10 xl:mt-[88px] xl:flex-row-reverse">
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
          <ul className="flex flex-col gap-2 xl:gap-3">
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
