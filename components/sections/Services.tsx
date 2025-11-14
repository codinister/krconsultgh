'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { servicesType } from '@/types/types';
import ServiceBox from '../ServiceBox';

const Services = () => {
  const result = useGetQuery('services', '/services');
  const data: servicesType = result || [];

  const txt = data[0]?.textcard;
  const prim = data[0]?.primarycard;

  return (
    <div className="services">
      <div>
        <h6>{txt?.sub_title}</h6>
        <h2>{txt?.title}</h2>
        <p>{txt?.excerpt}</p>
      </div>

      <div>
        {prim &&
          prim.map((v, k) => {
            const img = `/img${k}.jpg`;
            return (
              <ServiceBox
                key={k}
                img={img}
                title={v.title}
                excerpt={v.excerpt}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Services;
