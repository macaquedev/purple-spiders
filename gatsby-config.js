module.exports = {
  siteMetadata: {
    title: "purple-spiders",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Heebo', "Heebo:900", "Heebo:500", "Heebo:300"]        
        }
      }
    }
  ]
}