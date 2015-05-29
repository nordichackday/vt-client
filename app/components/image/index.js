/*global OpenLayers*/

import React from 'react';

export default class Image extends React.Component {
  constructor(props) {
    props = props || {};
    super(props);
  }

  render() {
    const data = JSON.parse(this.props.data || '{}');
    const inlineStyle = { backgroundImage: 'url(' + data.originalUrl + ')' };

    return (
      <div className='media--image' style={inlineStyle} />
    );
  }
}
