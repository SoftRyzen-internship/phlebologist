import { Heading, TreatmentTabList } from '@/components';

const Treatments = ({ staticData, lang }) => {
  const { title, button, more, notes, methods } = staticData;

  return (
    <section className="xl:mt[-48px] mt-[-20px] md:mt-[-36px]" id="methods">
      <div className="container">
        <div
          className="wrapper rounded-t-medium bg-white pb-[52px] pt-8  
                        md:rounded-t-extraLarge md:pb-[76px] md:pt-[40px] 
                        xl:rounded-t-max xl:pb-[112px] xl:pt-16"
        >
          <Heading>{title}</Heading>

          <TreatmentTabList lang={lang} data={{ button, more, methods }} />
          {notes.map((note, index) => (
            <p key={`${note}${index}`}>{note}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
