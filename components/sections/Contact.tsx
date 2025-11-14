'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Map from '../Map';
import Pageheader from '../Pageheader';
import { settingsType } from '@/types/types';
import ContactDetails from '../ContactDetails';
import ContactForm from '../ContactForm';

const Contact = () => {
  const result = useGetQuery('settings', '/settings');
  const sett: settingsType = result || [];

  return (
    <>
      <Pageheader title="Contact Us" />

      <div className="contactus">
        <div className="container">
          <div>
            <ContactDetails />
          </div>
          <div
            style={{
              backgroundImage: `url("/contact.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          ></div>
          <div>
            <ContactForm />
          </div>
        </div>

        <div className="container">
          <Map src={sett[0]?.comp_location} width="100%" height="450" />
        </div>
      </div>
    </>
  );
};

export default Contact;
