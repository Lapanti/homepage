import React, { PropTypes } from 'react'
import { joinUri } from 'phenomic'
import styles from './index.css'
import FontAwesome from 'react-fontawesome'

export default class ShareSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.fbClick = this.fbClick.bind(this);
    this.showSidebar = this.showSidebar.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.showSidebar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.showSidebar);
  }

  fbClick() {
    window.open(joinUri(
      'https://www.facebook.com/dialog/share?app_id=1822670807980469',
      '&display=popup',
      '&href=' + joinUri(process.env.PHENOMIC_USER_URL, this.props.__url),
      '&message=' + this.props.title
    ), 'Facebook',
    'width=600, height=400, left='+ ((screen.width/2)-300) + 'top=' + ((screen.height/2)-200));
    return false;
  }

  showSidebar() {
    const div = document.getElementById('sidebarsharebuttons');
    if (scrollY > (window.innerHeight / 6)) {
      div.style.display = 'flex';
    } else {
      div.style.display = 'none';
    }
  }

  render() {
    return (
      <div id='sidebarsharebuttons' className={ styles.sidebarWrapper }>
        <div className={ styles.sidebar }>
          <a
            id='fbhovershare'
            href={joinUri(
              'https://www.facebook.com/dialog/share?app_id=1822670807980469',
              '&display=popup',
              '&href=' + joinUri(process.env.PHENOMIC_USER_URL, this.props.__url),
              '&message=' + this.props.title
            )}
            target='_blank'
            onClick={this.fbClick}
          >
            <FontAwesome
              ariaLabel='Jaa Facebookissa'
              name='facebook'
            />
          </a>
          <a
            href={joinUri(
              'https://twitter.com/intent/tweet',
              '?text="' + this.props.title + '" - @"' + this.props.twitter,
              '&url=' + joinUri(process.env.PHENOMIC_USER_URL, this.props.__url)
            )}
          >
            <FontAwesome
              ariaLabel='Jaa twitterissä'
              name='twitter'
            />
          </a>
        </div>
      </div>
    )
  }
}

ShareSidebar.propTypes = {
  title: PropTypes.string,
  __url: PropTypes.string,
  twitter: PropTypes.string,
}
