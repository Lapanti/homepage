import React, { PropTypes } from "react"

import PagePreview from "../PagePreview"

const PagesList = ({ pages }) => {
  return (
    <div>
      {
      pages.length
      ?
        pages.map((page) => (
          <PagePreview { ...page } key={page.title}/>
        ))
      : "Ei kirjoituksia"
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
