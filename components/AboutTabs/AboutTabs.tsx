'use client';

import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { useState } from 'react';

import {
  ButtonPrimary,
  AboutGeneral,
  AboutEducation,
  AboutCareer,
  AboutCertificates,
} from '@/components';

import { AboutTabsProps } from './AboutTabs.props';

const AboutTabs: React.FC<AboutTabsProps> = ({
  staticData: {
    menu,
    firstSubtitle,
    secondSubtitle,
    educationBtns,
    careerBtns,
  },
  data: { general, education, career, certificates },
  iconData,
  lang,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="grow overflow-hidden">
      <Tab.Group
        manual
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <Tab.List
          as={'ul'}
          className={'mb-5 flex flex-wrap gap-3 md:mb-8 xl:mb-[64px]'}
        >
          {menu.map((item, index) => (
            <Tab
              className={'outline-none'}
              key={`${item.collection}${index}`}
              as={'li'}
            >
              {({ selected }) => (
                <ButtonPrimary
                  className={classNames(
                    'smOnly:px-4',
                    selected ? '' : 'notXl:!bg-gray-light',
                  )}
                  variant={selected ? 'dark' : 'light'}
                >
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
              lang={lang}
            />
          </Tab.Panel>
          <Tab.Panel>
            <AboutEducation data={education} staticData={educationBtns} />
          </Tab.Panel>
          <Tab.Panel>
            <AboutCareer data={career} staticData={careerBtns} />
          </Tab.Panel>
          <Tab.Panel>
            <AboutCertificates data={certificates} iconData={iconData} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default AboutTabs;
