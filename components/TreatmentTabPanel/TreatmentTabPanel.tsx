import { MethodButton, InfoBlock, TreatmentTabImage } from '@/components';

const TreatmentTabPanel = ({ data, lang }) => {
  const {
    method: { id, name, info, image },
    button,
  } = data;

  return (
    <>
      <TreatmentTabImage image={image} alt={name} />

      <ul>
        {info.map((item, index) => (
          <li key={`${item.question}${index}`}>
            <InfoBlock
              config={{
                section: 'contacts',
                title: item.question,
                content: item.answer,
              }}
            />
          </li>
        ))}
      </ul>

      <MethodButton lang={lang} id={id}>
        {button}
      </MethodButton>
    </>
  );
};

export default TreatmentTabPanel;
