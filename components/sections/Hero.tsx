'use client';
import useGetQuery from '@/state/query/useGetQuery';
import { heroType } from '@/types/types';
import Link from 'next/link';

const Hero = () => {
  const result = useGetQuery('hero', '/hero');
  const hero: heroType = result || [];

  const data = hero[0]?.primarycard || [];



  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${data?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div>
        <div>
          <div>
            <h6>{data?.sub_title}</h6>
            <h1>{data?.title}</h1>
            <p>{data?.exerpt}</p>
            <Link href="/contact">Get in Touch</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
