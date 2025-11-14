'use client';
import useGetQuery from '@/state/query/useGetQuery';
import { servicesType, settingsType } from '@/types/types';
import Image from 'next/image';
import { VscLocation } from 'react-icons/vsc';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Footer = () => {
  const result = useGetQuery('settings', '/settings');
  const sett: settingsType = result || [];

  const services: servicesType = useGetQuery('services', '/services');
  const serv = services || [];

  const excerpt = serv[0]?.textcard.excerpt;



  return (
    <footer>
      <div className="container">
        <div>
          <div>
            {sett[0] && (
              <Image src={sett[0]?.logo} alt="logo" width="60" height="60" />
            )}
            <h3>{sett[0]?.comp_name}</h3>
          </div>
          <div>{excerpt}</div>
        </div>
        <div>
          <h3>Office Information</h3>
          <ul>
            <li>
              <MdOutlineLocalPhone /> {sett[0]?.phone1}
            </li>
            <li>
              <MdOutlineLocalPhone /> {sett[0]?.phone2}
            </li>
            <li>
              <HiOutlineEnvelope /> {sett[0]?.comp_email}
            </li>
            <li>
              <VscLocation /> {sett[0]?.comp_location}
            </li>
          </ul>
        </div>
        <div>
          <h3>Our Services</h3>
          <ul>
          {serv[0]?.primarycard.map((v,k) => (
          <li key={k}><MdKeyboardDoubleArrowRight /> {v.title}</li>
          ))}
          </ul>
        </div>
      </div>

      <div>
        {sett[0]?.comp_name} - Copyright All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
