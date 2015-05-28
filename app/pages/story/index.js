import React from 'react';
import MediaViewer from '../../components/media-viewer';
import Timeline from '../../components/timeline';

export default class Story extends React.Component {
  constructor(props) {
    props = props || {};
    super(props);
    this.state = {
      height: 0
    };
  }

  render() {
    return (
      <div className="story">
        <MediaViewer />
        <Timeline entries={this.props.entries} />
      </div>
    );
  }
}
