import { Slider, FeedbackSlide } from '@/components';

import { FeedbackProps } from './Feedback.props';

const Feedback: React.FC<FeedbackProps> = ({ staticData }) => {
  const slides = [
    { __typename: 2367289350 },
    { __typename: 2367289351 },
    { __typename: 2367289352 },
    { __typename: 2367289353 },
    { __typename: 2367289354 },
  ];

  return (
    <section className="-mt-[20px] text-black-dark  md:-mt-[36px] xl:-mt-[48px]">
      <div className="container">
        <div className="wrapper rounded-medium bg-gray-light pb-[32px] pt-[24px] md:py-[40px] xl:py-[64px]">
          <Slider
            slides={slides}
            staticData={staticData}
            section="feedback"
            slide={FeedbackSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
