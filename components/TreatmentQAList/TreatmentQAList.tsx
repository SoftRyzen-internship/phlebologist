import { TreatmentQAItem } from '@/components';

const TreatmentQAList = ({ data }) => {
  return (
    <ul className="flex flex-col gap-8">
      {data.map((item, index) => (
        <TreatmentQAItem key={index} data={item} />
      ))}
    </ul>
  );
};

export default TreatmentQAList;
