import React from 'react';
import MediaViewer from '../../components/media-viewer';
import Timeline from '../../components/timeline';

export default class Story extends React.Component {
  constructor(props) {
    props = props || {};

    super(props);

    this.state = {
      mediaId: (props.nodes && props.nodes.length ? props.nodes[0].mediaId : null),
      height: 0
    };
  }

  handleActivateNode(id) {
    this.setState({
      mediaId: id
    });
  }

  render() {
    return (
      <div className="story">
        <MediaViewer mediaId={this.state.mediaId} nodes={this.props.nodes} />
        <Timeline mediaId={this.state.mediaId} onActivateNode={this.handleActivateNode.bind(this)} title={this.props.title} nodes={this.props.nodes} />
      </div>
    );
  }
}
