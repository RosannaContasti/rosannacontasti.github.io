import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
      output: "export",
  images: {
    unoptimized: true, // obligatorio para GitHub Pages
  }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);