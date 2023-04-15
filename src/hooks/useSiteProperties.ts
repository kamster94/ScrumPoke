import manifest from '@/../manifest.json' assert { type: 'JSON' };
import { SiteProperties } from '@/models/Site';

function useSiteProperties() {
  const siteProperties = manifest as SiteProperties;

  return {
    siteProperties,
  };
}

export default useSiteProperties;
