import React, { PropTypes } from "react"

import Page from "../Page"
import ShareHover from "../../components/ShareHover"
import ShareSidebar from "../../components/ShareSidebar"

const Post = (props, { metadata: { pkg }, }) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null

  return (
    <Page
      { ...props }
      header={
        <header>
          {
          pageDate &&
          <time key={ pageDate.toISOString() }>
            { pageDate.toLocaleDateString('fi-FI') }
          </time>
        }
        </header>
      }
    >
      <ShareHover __url={ props.__url } twitter={ pkg.twitter }/>
      <ShareSidebar title={ props.head.title } __url={ props.__url } twitter={ pkg.twitter } />
    </Page>
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
  __url: PropTypes.string,
}

Post.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Post
