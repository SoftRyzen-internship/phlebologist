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
      <Heading variant="secondary" tag="h3" className="mt-6">
        {name}
      </Heading>
      <p
        className="mt-4 font-medium uppercase leading-6
        md:mt-8 md:w-[234px] xl:w-[296px] xl:text-xl"
      >
        {profession}
      </p>

      <p className="mb-1 mt-6 font-semibold uppercase md:mt-7">
        {firstSubtitle}
      </p>
      <ul className="flex flex-col gap-1">
        {experience &&
          experience.map((item, index) => (
            <li key={`${item.__typename}${index}`}>{item.point}</li>
          ))}
      </ul>

      <p className="mb-1 mt-6 font-semibold uppercase">{secondSubtitle}</p>
      <ul className="flex flex-col gap-6">
        {education &&
          education.map((item, index) => (
            <li key={`${item.__typename}${index}`}>{item.institution}</li>
          ))}
      </ul>
    </div>
  );
};

export default AboutGeneral;
