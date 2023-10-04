// import Image from 'next/image';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

// does not require 'lang' as an argument
// import { fetchImage } from '@/api/fetchAbout';

// types for data props will be defined once we have a fixed collection structure
const Test = async ({ data }) => {
  // temporary fix (when data is undefined) - need proper error handling
  if (!data) {
    return;
  }

  const { name, profession, education, experience } = data;
  // const img = await fetchImage();

  return (
    <>
      <h1 className="mt-12 text-3xl font-semibold">{name}</h1>
      <h2 className="uppercase">
        <TinaMarkdown content={profession} />
      </h2>

      {/* <Image src={img as string} alt={name} width={250} height={250} /> */}

      <h3 className="mt-3 font-semibold">Освіта:</h3>
      <ul className="list-inside list-disc">
        {education &&
          education.map((item, index) => (
            <li key={`${item.__typename}${index}`}>{item.institution}</li>
          ))}
      </ul>

      <h3 className="mt-3 font-semibold">Досвід:</h3>
      <ul className="list-inside list-disc">
        {experience &&
          experience.map((item, index) => (
            <li key={`${item.__typename}${index}`}>{item.point}</li>
          ))}
      </ul>
    </>
  );
};

export default Test;
