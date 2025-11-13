
import { createClient } from 'next-sanity';

const config = process.env.SANITY_SERVER_API_KEY || '';

const serverConfig = createClient({
  dataset: 'production',
  projectId: config,
  useCdn: true, 
  apiVersion: '2025-10-07',  
});

export default serverConfig;
