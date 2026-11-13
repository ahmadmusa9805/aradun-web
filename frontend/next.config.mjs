/** @type {import('next').NextConfig} */
const config = {
  async headers() {
    return process.env.APP_ENV === "production"
      ? []
      : [
          {
            source: "/:path*",
            headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
          },
        ];
  },
};
export default config;
