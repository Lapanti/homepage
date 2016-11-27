import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import { joinUri } from "phenomic"

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      meta={ [
        {
          name: "generator", content: `${
          process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        { property: "og:site_name", content: pkg.name },
        { name: "twitter:site", content: `@${ pkg.twitter }` },
      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
        { src: "//platform.twitter.com/widgets.js" },
      ] }
      link={ [
        {
          href: "https://fonts.googleapis.com/css?family=PT+Sans|PT+Serif",
          rel: "stylesheet"
        },
        {
          href: joinUri(process.env.PHENOMIC_USER_URL, "/assets/font-awesome-4.7.0/css/font-awesome.min.css"),
          rel: "stylesheet"
        }
      ] }
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={ [ {
        name: "viewport", content: "width=device-width, initial-scale=1",
      } ] }
    />
    <style>{ "@-ms-viewport { width: device-width; }" }</style>
  </div>
)

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
