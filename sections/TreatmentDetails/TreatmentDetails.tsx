import { Heading, TreatmentQAList, TreatmentQAImage } from '@/components';

import { TreatmentDetailsProps } from './TreatmentDetails.props';

const TreatmentDetails: React.FC<TreatmentDetailsProps> = ({ staticData }) => {
  const { title, description, image, questions } = staticData;

  return (
    <section>
      <div className="container">
        <div
          className="wrapper rounded-medium bg-white pb-[62px] pt-8  
                        md:rounded-extraLarge md:pb-[96px] md:pt-[40px] 
                        xl:rounded-max xl:pb-[142px] xl:pt-16"
        >
          <Heading className="mb-8 md:mb-12 xl:mb-[64px] smOnly:text-[28px]">
            {title}
          </Heading>

          <p
            className="mb-8 ml-auto text-base font-normal leading-5 tracking-[-0.64px]
            text-black-dark md:mb-12 md:w-[319px] xl:mb-[64px] xl:w-[560px]"
          >
            {description}
          </p>

          <TreatmentQAImage image={image} alt={title} />

          <TreatmentQAList data={questions} />
        </div>
      </div>
    </section>
  );
};

export default TreatmentDetails;
