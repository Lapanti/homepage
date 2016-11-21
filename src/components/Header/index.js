/* eslint-disable no-unused-vars */

import React from "react"
import { Link } from "react-router"
import Headroom from "react-headroom"

import styles from "./index.css"

const Header = (props) => {

  return (
    <Headroom>
      <nav className={ styles.nav }>
        <div className={ styles.navPart1 }>
        </div>
        <div className={ styles.navPart2 }>
          <Link
            className={ styles.link }
            to="/"
          >
            { "Blogi" }
          </Link>
          <Link
            className={ styles.link }
            to="/kuka"
          >
            { "Kuka Lauri?" }
          </Link>
          <Link
            className={ styles.link }
            to="/yhteystiedot"
          >
            { "Yhteystiedot" }
          </Link>
        </div>
      </nav>
    </Headroom>
  )
}

export default Header
