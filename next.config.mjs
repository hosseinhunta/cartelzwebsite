/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shared.akamai.steamstatic.com",
        port: "",
        // pathname: "store_item_assets/steam/apps",
      },
      {
        protocol: "https",
        hostname: "client.royalcs.ir",
        port: "",
      },
    ],
  },
};

export default nextConfig;
