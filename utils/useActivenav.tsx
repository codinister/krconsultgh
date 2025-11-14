import { usePathname } from 'next/navigation';

const useActivenav = () => {
  const path = usePathname();

  const pathFn = (name: string) => {
    return path === name ? 'active' : '';
  };

  return { pathFn };
};

export default useActivenav;
