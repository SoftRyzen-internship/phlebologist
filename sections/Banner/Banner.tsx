import { fetchBanner } from '@/api';
import { Heading, ButtonSecondary } from '@/components';
import { IFetchedBannerData } from '@/types';
import { BannerProps } from './Banner.props';

const Banner: React.FC<BannerProps> = async ({
  staticData,
  lang,
  className,
}) => {
  const { buttonText, title, description } = staticData;
  let data = {
    title,
    description,
  };

  try {
    const results: IFetchedBannerData = await fetchBanner(lang);
    data = { ...results };
  } catch (error) {
    console.log(error);
  }

  return (
    <section
      id="banner"
      className={className}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="wrapper banner-bg flex h-[647px] flex-col justify-between rounded-medium pb-[62px] pt-6 md:h-auto md:items-start md:gap-12 md:rounded-extraLarge md:pb-[100px] md:pt-[94px] xl:relative xl:gap-16 xl:rounded-max xl:pb-[269px] xl:pt-[186px]">
          <Heading
            tag="h2"
            className="mx-auto w-[260px] text-center md:mx-0 md:w-[360px] md:text-left xl:w-[592px] xl:text-[64px] xl:!-tracking-[2.56px]"
            variant="main"
          >
            {data.title}
          </Heading>

          <div className="flex flex-col md:flex-col-reverse md:items-end md:gap-6 xl:gap-12">
            <ButtonSecondary
              linkto="consultation"
              className="mx-auto mb-2 md:mx-0 md:mb-0 md:mr-auto xl:w-[183px] xl:!px-0 xl:hover:w-[186px] xl:focus:w-[186px]"
            >
              {buttonText}
            </ButtonSecondary>

            <p className="mx-auto w-[260px] text-center text-xs font-medium !leading-normal -tracking-[0.48px] text-white md:w-[290px] md:text-start md:text-xl md:-tracking-[0.8px] xl:w-[530px] xl:text-left xl:text-2xl xl:-tracking-[0.96px]">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
