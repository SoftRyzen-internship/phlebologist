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
  staticData: { menu, firstSubtitle, secondSubtitle },
  data: { general, education, career, certificates },
  iconData,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Tab.Group
        manual
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <Tab.List as={'ul'} className={'mb-5 flex flex-wrap gap-3 md:mb-8'}>
          {menu.map((item, index) => (
            <Tab key={`${item.collection}${index}`} as={'li'}>
              {({ selected }) => (
                <ButtonPrimary variant={selected ? 'dark' : 'light'}>
                  {item.item}
                </ButtonPrimary>
              )}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <AboutGeneral
              data={general}
              staticData={{ firstSubtitle, secondSubtitle }}
            />
          </Tab.Panel>
          <Tab.Panel>
            <AboutEducation data={education} />
          </Tab.Panel>
          <Tab.Panel>
            <AboutCareer data={career} />
          </Tab.Panel>
          <Tab.Panel>
            <AboutCertificates data={certificates} iconData={iconData} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default AboutTabs;
