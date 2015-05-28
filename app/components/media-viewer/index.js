import React from 'react';
import Map from '../map';

export default class MediaViewer extends React.Component {
  constructor(props) {
    props = props || {};
    super(props);
  }

  render() {
    return (
      <div className='media-viewer'>
        <Map />
      </div>
    );
  }
}
