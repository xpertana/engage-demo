import React from "react"
// import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"
import EngageClient from "../components/EngageClient"

const GatsbyEngage = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title

  // const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title="YoYo">
      {/* <SEO title="All posts" /> */}
      {/* <Bio /> */}
      <EngageClient
        hide={false}
        // parentHook={this.engageClientHook.bind(this)}
        tokens={{ agent: "" }}
        lsDriver
        // idblok={this.state.idblok}
      />

      {/* {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })} */}
    </Layout>
  )
}

export default GatsbyEngage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
