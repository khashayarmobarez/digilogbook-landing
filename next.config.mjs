/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
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
          hostname: 'digilogbook.ir',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  