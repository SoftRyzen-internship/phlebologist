'use client';

import { Tab } from '@headlessui/react';

import { TreatmentTabButton, TreatmentTabPanel } from '@/components';

const TreatmentTabList = ({ lang, data }) => {
  const { button, more, methods } = data;

  return (
    <Tab.Group manual>
      <Tab.List as={'ul'}>
        {methods.map((method, index) => (
          <Tab key={`${method.slideNum}${index}`} as={'li'}>
            {({ selected }) => (
              <TreatmentTabButton
                variant={selected ? 'dark' : 'light'}
                data={{
                  ...method,
                  more,
                }}
              />
            )}
          </Tab>
        ))}
      </Tab.List>

      <Tab.Panels>
        {methods.map((method, index) => (
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
