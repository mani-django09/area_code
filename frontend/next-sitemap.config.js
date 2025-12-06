
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://allareacodes.cloud',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/api/*'],
}
