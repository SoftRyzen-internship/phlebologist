import {
  Heading,
  InfoBlock,
  SocialsList,
  ExternalLinkButton,
  Location,
} from '@/components';

import { ContactsProps } from './Contacts.props';

const Contacts: React.FC<ContactsProps> = ({
  staticData: { pageData, socialData },
}) => {
  const sectionData = pageData.contacts;

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      id={sectionData?.anchor}
      className="-mt-[30px] text-black-dark md:-mt-[56px] xl:-mt-[78px]"
    >
      <div className="container">
        <div className="wrapper relative rounded-medium bg-white pb-[32px] pt-[24px] md:rounded-extraLarge md:py-[40px] xl:rounded-max xl:py-[64px]">
          <Heading variant="primary">{sectionData.heading}</Heading>
          <address className="mt-[20px] flex flex-col gap-[20px] not-italic md:mt-[32px] md:flex-row md:gap-[80px] xl:mt-[48px] xl:justify-between xl:gap-0">
            <ul className="flex flex-col gap-[20px] md:gap-[32px] xl:gap-[64px]">
              <li>
                <InfoBlock
                  config={{
                    section: 'contacts',
                    title: sectionData.contactData.phone.caption,
                    contentType: 'link',
                    content: sectionData.contactData.phone.content,
                    link: sectionData.contactData.phone.content,
                  }}
                />
              </li>
              <li>
                <InfoBlock
                  config={{
                    section: 'contacts',
                    title: sectionData.contactData.address.caption,
                    content: sectionData.contactData.address.content,
                  }}
                />
              </li>
              <li>
                <InfoBlock
                  config={{
                    section: 'contacts',
                    title: sectionData.contactData.media.caption,
                    contentType: 'component',
                  }}
                >
                  <SocialsList
                    variant="contacts"
                    staticData={{
                      socials: socialData,
                      iconBtnData: pageData.iconBtnData,
                    }}
                  />
                  <p className="mt-[20px] text-center md:mt-[32px] md:text-left xl:mt-[64px] xl:text-[20px] xl:leading-normal">
                    {sectionData.action.instruction}
                  </p>
                  <ExternalLinkButton
                    linkto={socialData.telegram}
                    className="mx-auto mt-[8px] md:ml-0 md:mt-[24px] md:w-[248px] md:px-11"
                  >
                    {sectionData.action.actionName}
                  </ExternalLinkButton>
                </InfoBlock>
              </li>
            </ul>

            <div className="shrink-0">
              <InfoBlock
                config={{
                  section: 'contacts',
                  title: sectionData.contactData.schedule.caption,
                  content: sectionData.contactData.schedule.content,
                }}
              />
              <Location pageData={pageData} />
            </div>
          </address>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
