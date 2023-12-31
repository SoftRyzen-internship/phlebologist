'use client';

import { Tab } from '@headlessui/react';

import { TreatmentTabButton, TreatmentTabPanel } from '@/components';
import { IMethodData } from '@/types';

import { TreatmentTabListProps } from './TreatmentTabList.props';

const TreatmentTabList: React.FC<TreatmentTabListProps> = ({ lang, data }) => {
  const { button, more, methods } = data;

  return (
    <Tab.Group manual>
      <Tab.List
        as={'ul'}
        className="mb-5 flex flex-col gap-2 md:mb-8 md:grid md:grid-cols-2 md:gap-4 xl:mb-0 xl:w-[592px] xl:gap-7"
      >
        {methods.map((method: IMethodData, index: number) => (
          <Tab
            key={`${method.slideNum}${index}`}
            as={'li'}
            className="outline-none"
          >
            {({ selected }) => (
              <TreatmentTabButton
                variant={selected ? 'dark' : 'light'}
                data={{
                  method,
                  more,
                }}
                selected={selected}
              />
            )}
          </Tab>
        ))}
      </Tab.List>

      <Tab.Panels>
        {methods.map((method: IMethodData, index: number) => (
          <Tab.Panel key={`${method.slideNum}${index}`}>
            <TreatmentTabPanel
              data={{
                method,
                button,
              }}
              lang={lang}
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TreatmentTabList;
