'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { analyticsType } from '@/types/types';

const Analytics = () => {
  const result = useGetQuery('analytics', '/analytics');
  const data: analyticsType = result || [];

  const prim = data[0]?.primarycard;
  const txt = data[0]?.textcard;
  const hcd = data[0]?.headingcard;

  return (
    <div
      className="analytics"
      style={{
        backgroundImage: `url(${prim?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <div>
          <div>
          <h2>{prim?.title}</h2>
          <p>{prim?.exerpt}</p>
          </div>
        </div>
        <div>
          <div>
            <h6>{txt?.sub_title}</h6>
            <h2>{txt?.title}</h2>
            <p>{txt?.excerpt}</p>
          </div>
          <div>
            {hcd &&
              hcd.map((v, k) => {
                return (
                  <div key={k}>
                    <h6>{v.title}</h6>
                    <div className="bar"></div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
