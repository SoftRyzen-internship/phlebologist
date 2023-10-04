import { ErrorMessage, Heading } from '@/components';

import { AboutCareerProps } from './AboutCareer.props';

const AboutCareer: React.FC<AboutCareerProps> = ({ data }) => {
  if (!data) {
    return <ErrorMessage />;
  }

  const { title, institutions } = data;

  return (
    <div className="text-base font-normal tracking-[-0.64px] text-black-dark">
      <Heading variant="secondary" className="mt-6">
        {title}
      </Heading>

      <ul className="ml-4 mt-4 md:mt-8">
        {institutions &&
          institutions.map((item, index) => (
            <li
              key={`${item.__typename}${index}`}
              className="flex items-baseline gap-2"
            >
              <span className="min-w-[62px] text-end text-xs">
                {item.period}
              </span>
              <span>{item.institution}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AboutCareer;
