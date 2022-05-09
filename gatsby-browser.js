const React = require("react")
const Layout = require("./src/components/Layout").default

require("@fontsource/open-sans")
require("@fontsource/open-sans/800.css")
require("@fontsource/lora")

require("./src/styles/index.scss")

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}