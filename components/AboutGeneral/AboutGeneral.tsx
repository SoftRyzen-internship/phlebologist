import { TinaMarkdown } from 'tinacms/dist/rich-text';

import { ErrorMessage } from '@/components';

const AboutGeneral = ({ data }) => {
  if (!data) {
    return <ErrorMessage />;
  }

  const { name, profession, education, experience } = data;

  return (
    <>
      <h3 className="mt-12 text-3xl font-semibold">{name}</h3>
      <h4 className="uppercase">
        <TinaMarkdown content={profession} />
      </h4>
      <TinaMarkdown content={profession} />

      <h5 className="mt-3 font-semibold">Освіта:</h5>
      <ul className="list-inside list-disc">
        {education &&
          education.map((item, index) => (
            <li key={`${item.__typename}${index}`}>{item.institution}</li>
          ))}
      </ul>

      <h5 className="mt-3 font-semibold">Досвід:</h5>
      <ul className="list-inside list-disc">
        {experience &&
          experience.map((item, index) => (
            <li key={`${item.__typename}${index}`}>{item.point}</li>
          ))}
      </ul>
    </>
  );
};

export default AboutGeneral;
