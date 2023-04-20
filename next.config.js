module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/ads.txt',
        destination: 'https://api.nitropay.com/v1/ads-1487.txt',
        permanent: true,
      },
    ];
  },
};
