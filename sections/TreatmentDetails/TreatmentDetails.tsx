import Image from 'next/image';

import { Heading, TreatmentQAList } from '@/components';

const TreatmentDetails = ({ staticData }) => {
  const { title, description, image, questions } = staticData;

  return (
    <section>
      <div className="container">
        <div
          className="wrapper rounded-t-medium bg-white pb-[52px] pt-8  
                        md:rounded-t-extraLarge md:pb-[76px] md:pt-[40px] 
                        xl:rounded-t-max xl:pb-[112px] xl:pt-16"
        >
          <Heading className="mb-8">{title}</Heading>

          <p className="mb-8 text-base font-normal leading-5 tracking-[-0.64px] text-black-dark">
            {description}
          </p>

          <div className="mb-8 h-[148px] w-[256px] rounded-medium">
            {/* mob w 256 h 148 */}
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="h-[148px] w-[256px] rounded-medium object-cover"
            />
          </div>

          <TreatmentQAList data={questions} />
        </div>
      </div>
    </section>
  );
};

export default TreatmentDetails;
