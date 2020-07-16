import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import { TEST, PROD } from "@xpertana/engage-environments"

import EngageClient from "../components/EngageClient"
import lsDriver from "@xpertana/engage-driver-ls-idb"

const displayCmds = require("@xpertana/engage-display-commands-exec")
const EngageCore = require("@xpertana/engage-core")

const E = new EngageCore({
  // parentHook,
  // ctx,
  // idblok: props.idblok,
  // autorun: props.flow,
  // lsDriver,
  // site,
  // stage,
  // tokens,
  endpoints: TEST,
  // refreshUI: this.refreshUI.bind(this),
  mode: "display",
})

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const posts = data.allMarkdownRemark.edges

  const { version } = E.version()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <h1>Engage v{version}</h1>

      {JSON.stringify(TEST)}
      {JSON.stringify(Object.keys(displayCmds.exec))}
      {/* {JSON.stringify(Object.keys(flows))} */}

      <EngageClient
        hide={false}
        // parentHook={this.engageClientHook.bind(this)}
        tokens={{ agent: "" }}
        lsDriver
        // idblok={this.state.idblok}
      />

      {posts.map(({ node }) => {
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
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
