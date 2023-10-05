import { ErrorMessage, Heading } from '@/components';

import { AboutEducationProps } from './AboutEducation.props';

const AboutEducation: React.FC<AboutEducationProps> = ({ data }) => {
  if (!data) {
    return <ErrorMessage />;
  }

  const { title, institutions } = data;

  return (
    <div className="text-base font-normal tracking-[-0.64px] text-black-dark">
      <Heading variant="secondary" className="mt-6">
        {title}
      </Heading>

      <ul className="ml-4 mt-4 list-inside list-disc md:mt-8">
        {institutions &&
          institutions.map((item, index) => (
            <li key={`${item.__typename}${index}`}>{item.institution}</li>
          ))}
      </ul>
    </div>
  );
};

export default AboutEducation;
