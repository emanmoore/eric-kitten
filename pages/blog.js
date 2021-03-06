import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";



const Blog = ({ data }) => {
   
    

   
    return (
        <Layout pageTitle="My Blog Posts">
         
              {data.allMdx.nodes.map((node)=> { 
                 
            return <article key={node.id}>
                  <h2>{node.frontmatter.title}</h2>
                  <p>{node.frontmatter.date}</p>
                  <MDXRenderer>{node.body}</MDXRenderer>
                </article>;

                })}
            
        </Layout>
    );
};

export const query = graphql`
query MyQuery {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "dddd, MMMM Do YYYY")
        title
      }
      id
      body
    }
  }
}`


      
    

export default Blog; 


