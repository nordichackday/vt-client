import React from 'react';
import Map from '../map';
import Image from '../image';
import Video from '../video';

export default class MediaViewer extends React.Component {
  constructor(props) {
    props = props || {};
    super(props);
  }

  render() {
    const currNodes = this.props.nodes.filter((node) => {
      return +node.mediaId === +this.props.mediaId;
    });

    let media;

    if (currNodes.length) {
      const nodeData = currNodes[0];
      const nodeMedia = (nodeData.media && nodeData.media.length) ? nodeData.media[0] : {};
      const type = nodeMedia.id || 1;
      const data = nodeMedia.data || '{}';

      switch (type) {
        case 2: // map
          media = <Map data={data} />;
          break;

        case 1: // image
          media = <Image data={data} />;
          break;

        case 3: // video mp4
          media = <Video data={data} />;
          break;          

        default: // for demo purpose
          media = <div>Unknown media type: {type}</div>;
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
