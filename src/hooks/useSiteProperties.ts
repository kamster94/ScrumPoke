import manifest from '@/../manifest.json' assert { type: 'JSON' };
import { SiteProperties, themeAtom } from '@/models/Site';
import { useAtom } from 'jotai';

function useSiteProperties() {
  const siteProperties = manifest as SiteProperties;
  const { siteName, avatars } = siteProperties;
  const [theme, setTheme] = useAtom(themeAtom);
  const siteTheme = { theme, setTheme };

  return {
    siteName,
    avatars,
    siteTheme,
  };
}

export default useSiteProperties;
