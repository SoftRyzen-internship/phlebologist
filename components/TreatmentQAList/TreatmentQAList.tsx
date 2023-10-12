import { TreatmentQAItem } from '@/components';

import { TreatmentQAListProps } from './TreatmentQAList.props';

const TreatmentQAList: React.FC<TreatmentQAListProps> = ({ data }) => {
  return (
    <ul className="flex flex-col gap-8 md:gap-12">
      {data.map((item, index) => (
        <TreatmentQAItem key={index} data={item} />
      ))}
    </ul>
  );
};

export default TreatmentQAList;
