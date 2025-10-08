import clientConfig from '@/state/sanity/client.config';
import { NextStudio } from 'next-sanity/studio';

const AdminDashboard = () => {
  return (
    <div className="mt-25">
      <NextStudio config={clientConfig} />
    </div>
  );
};

export default AdminDashboard;
