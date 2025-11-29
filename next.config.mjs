/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
    
    // Optional: If you use images, you might need to disable the Image Optimization 
    // loader if you are deploying a pure static site without a separate image server.
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
