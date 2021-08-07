import * as React from "react";
import Layout from "../components/layout";
import { StaticImage }  from "gatsby-plugin-image";


const AboutPage = () => {
    return (
       <Layout pageTitle="About me">
           
           <p>I'm making this by following the Gatsby Tutorial.</p>
           <StaticImage 
      alt="tabby kitty"
       src="../images/kittenball.jpg"
       />
           

       </Layout>

      )
}

export default AboutPage

