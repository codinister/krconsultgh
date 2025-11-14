'use client';
import useGetQuery from '@/state/query/useGetQuery';
import { whychooseusType } from '@/types/types';
import TextCard from '../cards/TextCard';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrServicePlay } from "react-icons/gr";
import { CiGlobe } from "react-icons/ci";
import { RiTeamLine } from "react-icons/ri";


const WhyChooseUs = () => {
  const result = useGetQuery('whychooseus', '/whychooseus');
  const data: whychooseusType = result || [];

  return (
    <div className="whychooseus">
      <div className="container">
        <div>
          <h6>{data[0]?.textcard.sub_title}</h6>
          <h2>{data[0]?.textcard.title}</h2>
          <p>{data[0]?.textcard.excerpt}</p>
        </div>
        <div>
          {data[0]?.textcardarray.map((v, k) => {
            return (
              <TextCard key={k} title={v.title} excerpt={v.excerpt} icon={v.title === 'Trustworthy' ?<VscWorkspaceTrusted /> : v.title === 'Fastest Service' ? <GrServicePlay />: v.title === 'Global Presence'? <CiGlobe /> : v.title === 'Professional Team' ? <RiTeamLine />
 : ''} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
