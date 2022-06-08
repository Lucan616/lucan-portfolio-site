module.exports = {
  siteMetadata: {
    title: `Lucan Portfolio Site`,
    siteUrl: `https://www.lucan.dev`
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     "projectId": "someId",
    //     "dataset": ""
    //   }
    // }, 
    "gatsby-plugin-netlify",
    "gatsby-plugin-sass",
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};