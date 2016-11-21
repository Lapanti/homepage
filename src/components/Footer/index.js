import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    <p>
      Kaikki sivuston sisältö on julkaistu&nbsp;
      <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons CC BY-SA 4.0</a>
      &nbsp;lisenssin alla<br/>
      ja sivuston koodi&nbsp;
      <a href="https://github.com/Lapanti/homepage/blob/master/LICENSE">MIT</a>
      &nbsp;lisenssin alla&nbsp;
      <a href="https://github.com/Lapanti/homepage">Githubissa</a>
    </p>
  </footer>
)

export default Footer
