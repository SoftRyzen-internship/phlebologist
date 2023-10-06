import { Heading, QuestionsList, ExternalLinkButton } from '@/components';

import { FAQProps } from './FAQ.props';

const FAQ: React.FC<FAQProps> = ({ staticData: { faq, socials } }) => {
  const { title, description, button, questions, aria } = faq;
  const { telegram } = socials;

  return (
    // test-margin
    <section className="mt-[-60px]">
      <div className="container">
        <div
          className="wrapper rounded-t-medium bg-white pb-[90px] pt-8  
            md:rounded-t-extraLarge md:pb-[80px] md:pt-[18px] 
            xl:relative xl:flex xl:min-h-[864px] xl:justify-between xl:rounded-t-max xl:pt-16"
        >
          <Heading className="mb-8 md:mb-10 md:w-[428px] xl:mb-0 xl:w-[360px]">
            {title}
          </Heading>
          <QuestionsList data={{ questions, aria }} />

          <div className="xl:absolute xl:top-[640px]">
            <p
              className="mt-9 text-center text-sm font-normal 
              leading-[18px] tracking-[-0.56px] text-black-dark
              md:mx-auto md:mt-10 md:w-[452px] md:text-xl md:leading-6 md:tracking-[-0.8px]
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
