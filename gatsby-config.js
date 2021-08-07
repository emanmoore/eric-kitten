module.exports = {
  siteMetadata: {

  title: "Tabby Kitten",
},

 plugins:  ["gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",

 {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "blog",
      path:`${__dirname}/public/blog`,
    }, 
  },
  "gatsby-plugin-mdx",

  ],
}; 
 


