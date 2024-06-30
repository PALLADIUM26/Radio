// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3001/api/:path*',  // Proxy to your API server
            },
        ];
    },
};

