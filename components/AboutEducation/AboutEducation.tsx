import { ErrorMessage, Heading } from '@/components';

import { AboutEducationProps } from './AboutEducation.props';

const AboutEducation: React.FC<AboutEducationProps> = ({ data }) => {
  // console.log(data);
  if (!data) {
    return <ErrorMessage />;
  }

  const { title, institutions } = data;

  return (
    <div className="text-base font-normal tracking-[-0.64px] text-black-dark">
      <Heading variant="secondary" className="mt-6">
        {title}
      </Heading>

      <ul className="mt-5 list-none md:mt-8 md:grid md:grid-cols-2 md:gap-x-6 xl:block">
        {institutions &&
          institutions.map((item, index) => (
            <li
              key={`${item.__typename}${index}`}
              className="mb-4 last:mb-0 md:flex md:items-baseline md:gap-2"
            >
              <span className="block text-xs leading-normal -tracking-[0.48px] md:min-w-[62px] md:text-end smOnly:mb-2">
                {item.period}
              </span>
              <p className="font-medium leading-normal -tracking-[0.64px]">
                {item.institution}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AboutEducation;
