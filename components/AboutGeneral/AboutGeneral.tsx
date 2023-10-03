import { ErrorMessage } from '@/components';

const AboutGeneral = ({ data }) => {
  if (!data) {
    return <ErrorMessage />;
  }

  const { name, profession, education, experience } = data;

  return (
    <>
      <h3 className="mt-6 text-[28px] font-medium tracking-[-2.24px] text-black-dark">
        {name}
      </h3>
      <h4 className="text-base font-medium uppercase tracking-[-0.64px] text-black-dark">
        {profession}
      </h4>

      <h5 className="mb-1 mt-6 text-base font-semibold uppercase tracking-[-0.64px] text-black-dark">
        Досвід:
      </h5>
      <ul className="text-base font-normal tracking-[-0.64px] text-black-dark">
        {experience &&
          experience.map((item, index) => (
            <li key={`${item.__typename}${index}`}>{item.point}</li>
          ))}
      </ul>

      <h5 className="mb-1 mt-6 text-base font-semibold uppercase tracking-[-0.64px] text-black-dark">
        Освіта:
      </h5>
      <ul className="flex flex-col gap-6 text-base font-normal tracking-[-0.64px] text-black-dark">
        {education &&
          education.map((item, index) => (
            <li key={`${item.__typename}${index}`}>{item.institution}</li>
          ))}
      </ul>
    </>
  );
};

export default AboutGeneral;
