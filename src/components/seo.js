/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      //   <link
      //   rel="stylesheet"
      //   href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      // />

      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `viewport`,
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    >
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.13.1/css/all.css"
        integrity="sha384-B9BoFFAuBaCfqw6lxWBZrhg/z4NkwqdBci+E+Sc2XlK/Rz25RYn8Fetb+Aw5irxa"
        crossorigin="anonymous"
      ></link>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
