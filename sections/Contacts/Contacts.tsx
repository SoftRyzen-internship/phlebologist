import { Heading, InfoBlock, ExternalLinkButton } from '@/components';

import { ContactsProps } from './Contacts.props';

const Contacts: React.FC<ContactsProps> = ({ staticData: { pageData } }) => {
  const sectionData = pageData.contacts;

  return (
    <section className="-mt-[105px] text-black-dark">
      <div className="main-container">
        <div className="wrapper rounded-medium bg-white py-[32px]">
          <Heading variant="primary">{sectionData.heading}</Heading>
          <address className="flex flex-col gap-[48px] md:flex-row md:gap-0">
            <ul>
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
                  <p>Buttons</p>
                  <p>{sectionData.contactData.action.instruction}</p>
                  <ExternalLinkButton linkto="#">
                    {sectionData.action.actionName}
                  </ExternalLinkButton>
                </InfoBlock>
              </li>
            </ul>

            <div>
              <InfoBlock
                config={{
                  section: 'contacts',
                  title: sectionData.contactData.location.caption,
                  content: sectionData.contactData.location.content,
                }}
              />
            </div>
          </address>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
