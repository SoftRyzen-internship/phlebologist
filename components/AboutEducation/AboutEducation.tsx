import { ErrorMessage } from '@/components';

const AboutEducation = ({ data }) => {
  if (!data) {
    return <ErrorMessage />;
  }

  const { title, institutions } = data;

  return (
    <>
      <h3 className="mt-12 text-3xl font-semibold">{title}</h3>

      <ul className="list-inside list-disc">
        {institutions &&
          institutions.map((item, index) => (
            <li key={`${item.__typename}${index}`}>{item.institution}</li>
          ))}
      </ul>
    </>
  );
};

export default AboutEducation;
