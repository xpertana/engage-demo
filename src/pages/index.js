import React from "react"
// import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import EngageClient from "../components/EngageClient"

const EngageGatsby = ({ data, location }) => {
  return (
    <Layout location={location}>
      <EngageClient
        hide={false}
        // parentHook={this.engageClientHook.bind(this)}
        tokens={{ agent: "" }}
        lsDriver
        // idblok={this.state.idblok}
      />
    </Layout>
  )
}
export default EngageGatsby

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
