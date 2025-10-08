
import { createClient } from 'next-sanity';

const config = process.env.NEXT_PUBLIC_SANITY_CLIENT || '';

const serverConfig = createClient({
  dataset: 'production',
  projectId: config,
  useCdn: true, 
  apiVersion: '2025-10-07',  
});

export default serverConfig;
