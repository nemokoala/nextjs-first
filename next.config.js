/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;
const nextConfig = {
  reactStrictMode: true,
  basePath: "/nextjs-first",
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/about",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:movieID",
        destination: `https://api.themoviedb.org/3/movie/:movieID?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
