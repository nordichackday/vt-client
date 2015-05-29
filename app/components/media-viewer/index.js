import React from 'react';
import Map from '../map';
import Image from '../image';

export default class MediaViewer extends React.Component {
  constructor(props) {
    props = props || {};
    super(props);
  }

  render() {
    const mediaData = this.props.nodes.filter((node) => {
      return node.mediaId === this.props.mediaId;
    });

    let media;

    if (mediaData.length) {
      const type = this.props.media ? this.props.media.type : 'image';

      switch (type) {
        case 'map':
          media = <Map data={mediaData[0].data || "{\"bounds\":[[0,0],[0,0]]}"} />;
          break;

        case 'image':
          media = <Image data={mediaData[0].data || "{\"originalUrl\":\"http://static01.nyt.com/images/2012/11/22/arts/22CENTRAL/22CENTRAL-articleLarge.jpg\"}"} />;
          break;

        default: // for demo purpose
          media = <Map data={mediaData[0].data || "{\"bounds\":[[0,0],[0,0]]}"} />;
          break;
      }
    }

    return (
      <div className='media-viewer'>
        {media}
      </div>
    );
  }
}
