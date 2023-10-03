'use client';

import { Tab } from '@headlessui/react';
import { useState } from 'react';

import { AboutTabsProps } from './AboutTabs.props';
import {
  ButtonPrimary,
  AboutGeneral,
  AboutEducation,
  AboutCareer,
  AboutCertificates,
} from '@/components';

const AboutTabs: React.FC<AboutTabsProps> = ({
  staticData,
  data: { general, education, career, certificates },
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Tab.Group
        manual
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <Tab.List as={'ul'} className={'flex gap-3'}>
          {staticData.map((item, index) => (
            <Tab key={`${item.collection}${index}`} as={'li'}>
              {/* {item.item} */}
              <ButtonPrimary>{item.item}</ButtonPrimary>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <AboutGeneral data={general} />
          </Tab.Panel>
          <Tab.Panel>
            <AboutEducation data={education} />
          </Tab.Panel>
          <Tab.Panel>
            <AboutCareer data={career} />
          </Tab.Panel>
          <Tab.Panel>
            <AboutCertificates data={certificates} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default AboutTabs;
