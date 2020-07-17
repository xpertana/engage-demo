import React from "react"
import SEO from "./SEO"

const Layout = ({ location, title, children }) => {
  console.log(location)

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: "100%",
      }}
    >
      <SEO />
      <main>{children}</main>
    </div>
  )
}

export default Layout
