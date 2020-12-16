require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const theme = require("./theme") 
module.exports = {
  siteMetadata: {
    title: `Chapter Three`,
    description: `Why you want to work here We have a down-to-earth, unconventional company culture. 
    We embrace those with a passion for doing excellent work. Have a great idea? 
    We support team members who bring strong ideas to the table and run with them.
     We’re looking for innovators who want to build their skills and grow with our Internet A-team.`,
    author: ``,
    twitterHandle:`@chapter_three`,
    siteURL: `http://frontend.lndo.site`,
    twitter: `https://twitter.com/chapter_three`,
    linkedin: `https://www.linkedin.com/company/chapter-three/`,
    instagram: `https://www.instagram.com/chapter_three_sf/`,
    facebook: `https://www.facebook.com/Ch.Three`,


  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "${__dirname}/src/css/global";`,
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-reflexjs`,
      options: {
        theme,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Drupal",
        fieldName: "drupal",
        url: `https://epic-gatsby-chapter-three-ci.pantheonsite.io/graphql/`
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.BASE_URL,
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
        preview: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chapter Three`,
        short_name: `chapterthree`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#15616f`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'http://c3.lndo.site/graphql/',
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
