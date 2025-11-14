import useGetQuery from '@/state/query/useGetQuery';
import { settingsType } from '@/types/types';
import { MdOutlineLocalPhone } from 'react-icons/md';
import Button from './buttons/Button';

const QuickContact = () => {
  const result = useGetQuery('settings', '/settings');
  const sett: settingsType = result || [];

  return (
    <div className="quickcontact">
      <div className="container">
        <div>
          <div>
          <div>
            <MdOutlineLocalPhone />
          </div>
          <div>
            <h6>Call for more info</h6>
            <h3>{sett[0]?.phone1}</h3>
          </div>
          </div>
        </div>
        <div>
          <h3>Request a Schedule For Consultation</h3>
        </div>
        <div>
          <Button name="CONTACT" classname="btn-primary" />
        </div>
      </div>
    </div>
  );
};

export default QuickContact;
