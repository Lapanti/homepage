import React, { PropTypes } from "react"
import { Link } from "react-router"
import { joinUri } from "phenomic"
import moment from "moment"
import styles from "./index.css"

const PagePreview = ({ __url, title, date, summary, featuredImage }) => {
  const pageDate = date ? new Date(date) : null
  moment.locale('fi');
  const str = moment(pageDate).fromNow();
  const timeStr = str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <div className={ styles.excerpt }>
        {
          featuredImage &&
          <div className={ styles.headerImageDiv }>
            <Link to={ __url }>
              <img className={ styles.headerImage } src={ joinUri(process.env.PHENOMIC_USER_URL, featuredImage) }/>
            </Link>
          </div>
        }
      <Link to={ __url } className={ styles.titleLink }>
        <h1 className={ styles.title } >{ title }</h1>
      </Link>
      {
        pageDate &&
        <small>
          { " " }
          <time key={ pageDate.toISOString() }>
            { timeStr }
          </time>
        </small>
      }
      {
        summary &&
        <p className={ styles.summary }>{ summary }</p>
      }
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  summary: PropTypes.string,
  featuredImage: PropTypes.string,
}

export default PagePreview
