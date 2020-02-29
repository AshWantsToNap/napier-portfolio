require(`dotenv`).config({
  path: `.env.*`,
})

module.exports = {
  siteMetadata: {
      siteTitle: "Ian Napier Portfolio",
      siteTitleAlt: "Ian Napier Portfolio",
      siteHeadline: "Meet Ian Napier",
      siteUrl: "https://www.ian-napier.com/",
      siteDescription: "Portfolio for Ian Napier",
      siteLanguage: "English",
      siteImage: "./static/judgment.jpg",
      author: "Ian Napier",
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IanNapier`,
        short_name: `Ian`,
        description: `Ian Napier`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "ian-napier-portfolio",
      },
    },
  ],
}
