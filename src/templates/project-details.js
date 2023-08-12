import React from "react";
import Layout from "../components/Layout";
import { details, featured, htmls } from "../styles/project-details.module.css";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function projectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          <GatsbyImage
            image={featuredImg.childImageSharp.gatsbyImageData}
            alt="featured image"
          />
        </div>
        <div className={htmls} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        slug
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
