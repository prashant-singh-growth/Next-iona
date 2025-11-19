/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["res.cloudinary.com", "placehold.co"],
    unoptimized: false,
  },

  async redirects() {
    return [
      {
        source: "/find",
        destination: "/solutions/novacount",
        permanent: true,
      },
      {
        source: "/novaassist",
        destination: "/solutions/novaassist",
        permanent: true,
      },
      {
        source: "/speedboard",
        destination: "/solutions/speedboard",
        permanent: true,
      },
      {
        source: "/novastart",
        destination: "/solutions/novastart",
        permanent: true,
      },
      {
        source: "/novadoc",
        destination: "/solutions/novadoc",
        permanent: true,
      },
      {
        source: "/novaengage",
        destination: "/solutions/novaengage",
        permanent: true,
      },
      {
        source: "/trainplus",
        destination: "/solutions/trainplus",
        permanent: true,
      },
      {
        source: "/novaverify",
        destination: "/solutions/novaverify",
        permanent: true,
      },
      {
        source: "/casestudies",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/scheduledemo",
        destination: "/schedule-demo",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
