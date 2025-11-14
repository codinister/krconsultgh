'use client';
import useGetQuery from '@/state/query/useGetQuery';
import { portfolioType } from '@/types/types';

const Portfolio = () => {
  const result = useGetQuery('portfolio', '/portfolio');
  const port: portfolioType = result || [];

  const txt = port[0]?.textcard;
  const prim = port[0]?.primarycard;


  return (
    <div className="container">
      <div className="portfolio">
        <div>
          <h6>{txt?.sub_title}</h6>
          <h2>{txt?.title}</h2>
          <p>{txt?.excerpt}</p>
        </div>
        <div>
          {prim &&
            prim.map((v, k) => (
              <div key={k}>
                <div
                  style={{
                    backgroundImage: `url(${v.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                  }}
                ></div>
                <div>
                  <h6>{v?.title}</h6>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
