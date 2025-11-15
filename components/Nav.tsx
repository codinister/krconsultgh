'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { settingsType } from '@/types/types';
import useActivenav from '@/utils/useActivenav';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineEnvelopeOpen } from 'react-icons/hi2';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { VscLocation } from 'react-icons/vsc';
import { useState } from 'react';

const Nav = () => {
  const [toggle, toggleFn] = useState('hide');
  const result = useGetQuery('settings', '/settings');
  const data: settingsType = result || [];
  const { pathFn } = useActivenav();

  return (
    <nav>
      <div className={`container navbar ${toggle}`}>
        {data[0] && (
          <Link href="/">
            <Image src={data[0]?.logo} alt="Logo" width="80" height="90" />
          </Link>
        )}

        <ul>
          <li>
            <Link
              href="/"
              onClick={() => toggleFn('hide')}
              className={pathFn('/')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/aboutpage"
              onClick={() => toggleFn('hide')}
              className={pathFn('/aboutpage')}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/servicespage"
              onClick={() => toggleFn('hide')}
              className={pathFn('/servicespage')}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contactpage"
              onClick={() => toggleFn('hide')}
              className="btn-primary"
            >
              Get in touch
            </Link>
          </li>
        </ul>

        <div className="get-in-touch">
          <h3>Get in touch</h3>
          <ul>
            <li>
              <MdOutlineLocalPhone /> {data[0]?.phone1}
            </li>
            <li>
              <MdOutlineLocalPhone /> {data[0]?.phone2}
            </li>
            <li>
              <HiOutlineEnvelopeOpen /> {data[0]?.comp_email}
            </li>
            <li>
              <VscLocation /> {data[0]?.comp_location}
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`overlay ${toggle}`}
        onClick={() => toggleFn('hide')}
      ></div>
      <div className="hamburger">
        <Image
          src="/hamburger.jpg"
          alt=""
          onClick={() => toggleFn('show')}
          width="30"
          height="30"
        />
        <h6>{data[0]?.comp_name}</h6>
      </div>
    </nav>
  );
};

export default Nav;
