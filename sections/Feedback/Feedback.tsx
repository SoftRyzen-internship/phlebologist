import { TinaMarkdownContent } from 'tinacms/dist/rich-text';

import { fetchReviews } from '@/api';
import { FeedbackSlideData } from '@/types';

import { Heading, Slider, FeedbackSlide } from '@/components';
import { FeedbackProps } from './Feedback.props';

const Feedback: React.FC<FeedbackProps> = async ({ staticData, lang }) => {
  let feedbacks = [] as FeedbackSlideData[];

  try {
    const result = await fetchReviews(lang);
    feedbacks = result.case;
  } catch (error) {
    const templates = staticData.feedback.templates;
    staticData.feedback.templates.forEach(
      item => (item.review.children = [] as TinaMarkdownContent[]),
    );
    feedbacks = templates;
  }

  return (
    <section
      id={staticData.feedback.anchor}
      className="-mt-[30px] text-black-dark  md:-mt-[56px] xl:-mt-[78px]"
    >
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="wrapper relative rounded-medium bg-gray-light pb-[62px] pt-[24px] md:rounded-extraLarge md:pb-[96px] md:pt-[40px] xl:rounded-max xl:pb-[142px] xl:pt-[64px]"
        >
          <Heading
            variant="primary"
            className="mb-[20px] md:absolute md:left-[24px] md:top-[40px] md:mb-0 xl:top-[64px]"
          >
            {staticData?.feedback?.heading}
          </Heading>

          <Slider
            slides={feedbacks}
            staticData={staticData?.iconBtnData}
            optionalStaticData={staticData.feedback}
            section="feedback"
            slide={FeedbackSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
