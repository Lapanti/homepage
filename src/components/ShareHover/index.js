/* eslint-disable no-undef, no-console */

import React, { PropTypes } from 'react'
import { joinUri } from 'phenomic'
import styles from './index.css'
import FontAwesome from 'react-fontawesome'

export default class ShareHover extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedText: 'Oho se toimii!', };
    this.fbClick = this.fbClick.bind(this);
    this.showHover = this.showHover.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.showHover);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.showHover);
  }

  fbClick() {
    window.open(joinUri(
      'https://www.facebook.com/dialog/share?app_id=1822670807980469',
      '&display=popup',
      '&href=' + joinUri(process.env.PHENOMIC_USER_URL, this.props.__url),
      '&message=' + this.state.selectedText
    ), 'Facebook',
    'width=600, height=400, left='+ ((screen.width/2)-300) + 'top=' + ((screen.height/2)-200));
    return false;
  }

  showHover() {
    const selection = window.getSelection();
    const div = document.getElementById('shavehoverBubble');
    this.setState({ selectedText: selection.toString() });
    if (this.state.selectedText.length > 83) {
      this.setState({ selectedText: this.state.selectedText.substring(0, 80) + '...' });
    }
    if (this.state.selectedText !== '') {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      div.style.top = (rect.top + window.scrollY) + 'px';
      div.style.left = (rect.left + (rect.width / 2)) + 'px';
      div.style.display = 'flex';
    } else {
      div.style.display = 'none';
    }
  }

  render() {
    return (
      <div id='shavehoverBubble' className={ styles.bubble }>
        <a
          id='fbhovershare'
          href={joinUri(
            'https://www.facebook.com/dialog/share?app_id=1822670807980469',
            '&display=popup',
            '&href=' + joinUri(process.env.PHENOMIC_USER_URL, this.props.__url),
            '&message=' + this.state.selectedText
          )}
          target='_blank'
          onClick={this.fbClick}
        >
          <FontAwesome
            ariaLabel='Share on Facebook'
            name='facebook'
            inverse={true}
          />
        </a>
        <a
          href={joinUri(
            'https://twitter.com/intent/tweet',
            '?text="' + this.state.selectedText + '" - @"' + this.props.twitter,
            '&url=' + joinUri(process.env.PHENOMIC_USER_URL, this.props.__url)
          )}
        >
          <FontAwesome
            ariaLabel='Share on Twitter'
            name='twitter'
            inverse={true}
          />
        </a>
      </div>
    );
  }
}

ShareHover.propTypes = {
  __url: PropTypes.string,
  twitter: PropTypes.string,
}
