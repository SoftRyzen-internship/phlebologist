import { TinaMarkdownContent } from 'tinacms/dist/rich-text';

import { fetchData } from '@/api';
import { FeedbackSlideData } from '@/types';

import { Heading, Slider, FeedbackSlide } from '@/components';
import { FeedbackProps } from './Feedback.props';

const Feedback: React.FC<FeedbackProps> = async ({ staticData, lang }) => {
  let feedbacks = [] as FeedbackSlideData[];

  try {
    const res = await fetchData(lang, 'reviews');
    feedbacks = await res.case;
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
