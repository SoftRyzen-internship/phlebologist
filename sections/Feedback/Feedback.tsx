import { fetchReviews } from '@/api';

import { Heading, Slider, FeedbackSlide } from '@/components';
import { FeedbackProps } from './Feedback.props';

const Feedback: React.FC<FeedbackProps> = async ({ staticData, lang }) => {
  const feedbacks = await fetchReviews(lang);

  return (
    <section
      id={staticData?.feedback?.anchor}
      className="-mt-[20px] text-black-dark  md:-mt-[36px] xl:-mt-[48px]"
    >
      <div className="container">
        <div className="wrapper relative rounded-t-medium bg-gray-light pb-[32px] pt-[24px] md:rounded-t-extraLarge md:py-[40px] xl:rounded-t-max xl:py-[64px]">
          <Heading
            variant="primary"
            className="mb-[20px] md:absolute md:left-[24px] md:top-[40px] md:mb-0 xl:top-[64px]"
          >
            {staticData?.feedback?.heading}
          </Heading>

          <Slider
            slides={feedbacks?.case}
            staticData={staticData?.iconBtnData}
            optionalStaticData={staticData?.feedback}
            section="feedback"
            slide={FeedbackSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
