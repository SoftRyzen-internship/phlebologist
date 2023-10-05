import classNames from 'classnames';

import { Heading, QuestionsList } from '@/components';

import { FAQProps } from './FAQ.props';

const FAQ: React.FC<FAQProps> = ({ staticData: { faq, socials } }) => {
  const { title, description, button, questions } = faq;
  const { telegram } = socials;

  return (
    <section>
      <div className="main-container">
        <div
          className="wrapper rounded-t-medium bg-white pb-[90px] pt-8 
            md:rounded-extraLarge md:pb-[80px] md:pt-[18px] 
            xl:relative xl:flex xl:min-h-[864px] xl:justify-between xl:rounded-t-max xl:pt-16"
        >
          <Heading className="mb-8 md:mb-10 md:w-[428px] xl:mb-0 xl:w-[360px]">
            {title}
          </Heading>
          <QuestionsList data={questions} />

          <div className="xl:absolute xl:top-[640px]">
            <p
              className="mt-9 text-center text-sm font-normal 
              leading-[18px] tracking-[-0.56px] text-black-dark
              md:mx-auto md:mt-10 md:w-[452px] md:text-xl md:leading-6 md:tracking-[-0.8px]
              xl:mt-0 xl:text-start"
            >
              {description}
            </p>

            {/* separate component in development, temp solution */}
            <a
              href={telegram}
              rel="noopener noreferrer nofollow"
              target="_blank"
              className={classNames(
                'w-[256px] font-normal md:w-[248px] md:px-12 xl:bg-white-light xl:focus:font-bold xl:mediaHover:hover:font-bold',
                'mt-6 md:mx-auto md:mt-9 xl:mx-0 xl:w-[252px]',
                'outline-without flex h-[51px] items-center justify-center rounded-normal bg-gray-light text-base leading-normal -tracking-[0.64px] text-black-dark',
                'focus:bg-gray-light mediaHover:hover:cursor-pointer mediaHover:hover:bg-gray-light',
                'transition-all duration-300',
              )}
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
