import { Heading, QuestionsList, ExternalLinkButton } from '@/components';

import { FAQProps } from './FAQ.props';

const FAQ: React.FC<FAQProps> = ({ staticData: { faq, socials } }) => {
  const { title, description, button, questions, aria } = faq;
  const { telegram } = socials;

  return (
    <section className="xl:mt[-48px] mt-[-20px] md:mt-[-36px]" id="faq">
      <div className="container">
        <div
          className="wrapper rounded-t-medium bg-white pb-[52px] pt-8  
            md:rounded-t-extraLarge md:pb-[76px] md:pt-[40px] 
            xl:relative xl:flex xl:min-h-[940px] xl:justify-between xl:rounded-t-max xl:pb-[112px] xl:pt-16"
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
              className="mx-auto mt-6 md:mt-9 md:w-[248px] xl:mx-0 xl:w-[252px]"
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
