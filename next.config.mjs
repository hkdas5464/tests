/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ["image/avif", "image/webp" ],
        domains: ['ssc.gov.in',"lh3.googleusercontent.com","flowbite.s3.amazonaws.com","media.gettyimages.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/**",
            },
        ],
    }
};

export default nextConfig;


