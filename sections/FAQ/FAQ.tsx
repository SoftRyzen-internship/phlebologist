import { Heading, QuestionsList, ExternalLinkButton } from '@/components';

import { FAQProps } from './FAQ.props';

const FAQ: React.FC<FAQProps> = ({ staticData: { faq, socials } }) => {
  const { title, description, button, questions, aria } = faq;
  const { telegram } = socials;

  return (
    <section className="mt-[-30px] md:mt-[-56px] xl:mt-[-78px]" id="faq">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="wrapper relative rounded-medium bg-white pb-[62px] pt-6  
            md:rounded-extraLarge md:pb-[96px] md:pt-[40px] 
            xl:flex xl:min-h-[940px] xl:justify-between xl:rounded-max xl:pb-[142px] xl:pt-16"
        >
          <Heading className="mb-5 md:mb-8 md:w-[428px] xl:mb-0 xl:w-[360px]">
            {title}
          </Heading>
          <QuestionsList data={{ questions, aria }} />

          <div className="xl:absolute xl:top-[682px]">
            <p
              className="mt-10 text-center text-sm font-normal 
              leading-[18px] tracking-[-0.56px] text-black-dark
              md:mx-auto md:mt-8 md:w-[470px] md:text-xl md:leading-6 md:tracking-[-0.8px]
              xl:mt-0 xl:text-start"
            >
              {description}
            </p>

            <ExternalLinkButton
              linkto={telegram}
              className="mx-auto mt-6 md:mt-9 md:w-[248px] xl:mx-0"
            >
              {button}
            </ExternalLinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
