
import useGetQuery from '@/state/query/useGetQuery';
import { settingsType } from '@/types/types';
import { VscLocation } from 'react-icons/vsc';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { MdOutlineLocalPhone } from 'react-icons/md';

const ContactDetails = () => {

  const result = useGetQuery('settings', '/settings');
  const sett: settingsType = result || [];

  return (
          <div>
            <ul>
              <li>
                <div>
                  <div>
                    <MdOutlineLocalPhone />
                  </div>
                  <div>
                    <p>Call us</p>
                    <h6>{sett[0]?.phone1}</h6>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <HiOutlineEnvelope />
                  </div>
                  <div>
                    <p>Work with us</p>
                   <h6> {sett[0]?.comp_email}</h6>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <VscLocation />
                  </div>
                  <div>
                    <p>Our Location</p>
                    <h6>{sett[0]?.comp_location}</h6>
                  </div>
                </div>
              </li>
            </ul>
          </div>
  )
}

export default ContactDetails