/** @type {import('next').NextConfig} */

module.exports = {
  nextConfig:{
    reactStrictMode: true,
    swcMinify: true,
  },
  images: {
    disableStaticImages: true
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.png$/,
      use: [
        {
          loader:"file-loader",
          options:{
            name:'[name].[contenthash].[ext]',
            outputPath:'static', //硬盘路径
            publicPath:'/_next/static' //网盘路径
          }
        }
      ],
    })

    return config
  },
}