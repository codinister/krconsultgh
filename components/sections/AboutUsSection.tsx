'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { aboutusType } from '@/types/types';

const AboutUsSection = () => {
  const result = useGetQuery('aboutus', '/aboutus');
  const data: aboutusType = result || [];

  const txt = data[0]?.textcard;
  const prim = data[0]?.primarycard;

  return (
    <div className="aboutus">
      <div className="container">
        <div>
          <h6>{txt?.sub_title}</h6>
          <h2>{txt?.title}</h2>
          <p>{txt?.excerpt}</p>
        </div>
        <div>
          {prim &&
            prim.map((v, k) => {
              return (
                <div key={k}>
                  <div
                    style={{
                      backgroundImage: `url(${v.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top',
                    }}
                  ></div>

                  <div>
                    <h3>{v.title}</h3>
                    <p>{v.exerpt}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection



