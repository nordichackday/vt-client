import React from 'react';
import TimelineEntry from './entry';

export default class Timeline extends React.Component {
  constructor(props) {
    props = props || {};

    super(props);

    this.state = {
      activeStoryId: this.props.mediaId || null,
      height: 0,
      scrollTop: 0
    };
  }

  handleActivate(id) {
    this.setState({
      activeStoryId: id
    });

    console.log('activate this', id);

    if (this.props.onActivateNode) {
      this.props.onActivateNode(id);
    }
  }

  render() {
    const nodes = this.props.nodes.map((node, i) => {
      return (
        <TimelineEntry
          isActive={+node.mediaId === +this.state.activeStoryId}
          onActivate={this.handleActivate.bind(this)}
          parentHeight={this.state.height}
          parentScrollTop={this.state.scrollTop} {...node}
          key={i} />
      );
    });

    return (
      <div className='timeline'>
        <h1 className='timeline--title'>{this.props.title}</h1>
        <p className='timeline--intro'>{this.props.intro || 'No intro yet...'}</p>
        <div className='timeline--nodes'>{nodes}</div>
      </div>
    );
  }
}
