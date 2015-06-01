/*global OpenLayers*/

import React from 'react';

export default class Video extends React.Component {
  constructor(props) {
    props = props || {};
    super(props);
  }

  render() {
    const data = JSON.parse(this.props.data || '{}');

    return (
      <div className='media--video' >
      <video autoplay>
        <source src={data.originalUrl} type="video/mp4" muted="true" />
      </video>
      </div>
    );
  }
}
