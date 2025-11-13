import useGetQuery from '@/state/query/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
    const result = useGetQuery('settings','/settings')
  const data = result || []
  return (
    <nav>
      <div className="container">
        <Image src="/logo" alt="Logo" width="80" height="90" />

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Get in touch</Link>
          </li>
        </ul>
      </div>
      <div className="overlay"></div>
      <div className="hamburger">
        <Image src="/hamburger.jpg" alt="" width="30" height="30" />
        <h6>KR Consult and Investment</h6>
      </div>
    </nav>
  );
};

export default Nav;
