import { Heading, TreatmentTabList } from '@/components';
import { TreatmentsProps } from './Treatments.props';

const Treatments: React.FC<TreatmentsProps> = ({ staticData, lang }) => {
  const { title, button, more, notes, methods } = staticData;

  return (
    <section className="xl:mt[-48px] mt-[-20px] md:mt-[-36px]" id="methods">
      <div className="container">
        <div className="wrapper rounded-t-medium bg-white pb-[52px] pt-6 md:rounded-t-extraLarge md:pb-[76px] md:pt-[40px] xl:relative xl:flex xl:h-[831px] xl:flex-col xl:flex-wrap xl:rounded-t-max xl:pb-[112px] xl:pt-16">
          <Heading className="mb-5 md:mb-8 xl:mb-12">{title}</Heading>

          <TreatmentTabList lang={lang} data={{ button, more, methods }} />

          <div className="w-full xl:absolute xl:bottom-[110px] xl:left-1/2 xl:-translate-x-1/2 ">
            {notes.map((note: string, index: number) => (
              <p
                key={`${note}${index}`}
                className="text-center text-xs font-normal tracking-[-0.48px] text-primary-dark-200 
                  md:text-justify xl:text-center"
              >
                {note}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
