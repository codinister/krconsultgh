'use client'

import { useQuery } from 'react-query';
import fetchApi from './fetchApi';
const useGetQuery = (key: string, url: string) => {
  const fetch = () => {
    return fetchApi({ url });
  };

  const res = useQuery(key, fetch);

  return res?.data.data || '';
};

export default useGetQuery;
