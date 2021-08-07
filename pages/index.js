import * as React from "react"
import Layout from "../components/layout"
import { StaticImage }  from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout  pageTitle="Home Page">
    
    

      <p>"Let's get a liitle physical with weights."</p>
      <StaticImage 
      alt="tabby kitten"
       src="../images/kittenchair.jpeg"
       />
       </Layout>
  )
}


export default IndexPage
