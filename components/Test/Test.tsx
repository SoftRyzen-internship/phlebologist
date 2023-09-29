import { TinaMarkdown } from 'tinacms/dist/rich-text';

// types for data props will be defined once we have a fixed collection structure
const Test = ({ data }) => {
  // temporary fix (when data is undefined) - need proper error handling
  if (!data) {
    return;
  }

  const { name, profession, education, experience } = data;

  return (
    <>
      <h1 className="mt-12 text-3xl font-semibold">{name}</h1>
      <h2 className="uppercase">
        <TinaMarkdown content={profession} />
      </h2>

      <h3 className="mt-3 font-semibold">Освіта:</h3>
      <ul className="list-inside list-disc">
        {education &&
          education.map(item => (
            <li key={item.__typename}>{item.institution}</li>
          ))}
      </ul>

      <h3 className="mt-3 font-semibold">Досвід:</h3>
      <ul className="list-inside list-disc">
        {experience &&
          experience.map(item => <li key={item.__typename}>{item.point}</li>)}
      </ul>
    </>
  );
};

export default Test;
