/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'file.digilogbook.app',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'file.digilogbook.ir',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'avatar.vercel.sh',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'webapp.digilogbook.app',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'digilogbook.app',
          port: '',
          pathname: '/**',
        },
      ],
    },
    async redirects() {
      return [
        {
          source: '/blogs',
          destination: '/blogs/1',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  