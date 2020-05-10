const Config = require("./src/config")
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: Config.siteName,
    description: Config.siteDescription,
    author: Config.author,
  },
  proxy: [
    {
      prefix: Config.proxyPass.prefixV1,
      url: Config.proxyPass.url,
    },
    {
      prefix: Config.proxyPass.prefixV2,
      url: Config.proxyPass.url,
    },
  ],
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "~src": "src",
          "~components": "src/components",
          "~assets": "src/assets",
          "~config": "src/config",
          "~api": "src/api",
          "~state": "src/state",
          "~utils": "src/utils",
          "~i18n": "src/i18n",
        },
        extensions: ["js", "css", "sass", "scss"],
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: process.env.SENTRY_DSN,
        // NOTE: Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: "en",
        useLangKeyLayout: true,
        prefixDefault: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
