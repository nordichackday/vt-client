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

  componentDidMount() {
    const $el = window.jQuery(React.findDOMNode(this));
    const $win = window.jQuery(window);

    $win.on('scroll', () => {
      this.setState({
        scrollTop: $win.scrollTop(),
        height: $el.height()
      });
    });
  }

  handleActivate(id) {
    this.setState({
      activeStoryId: id
    });

    if (this.props.onActivateNode) {
      this.props.onActivateNode(id);
    }
  }

  render() {
    const nodes = this.props.nodes.map((node, i) => {
      return (
        <TimelineEntry
          index={i}
          isActive={+node.mediaId === +this.state.activeStoryId}
          onActivate={this.handleActivate.bind(this)}
          parentHeight={this.state.height}
          parentScrollTop={this.state.scrollTop} {...node}
          key={i} />
      );
    });

    return (
      <div className='timeline'>
        <h1 className='timeline--title' dangerouslySetInnerHTML={{ __html: this.props.title }} />
        <p className='timeline--intro' dangerouslySetInnerHTML={{ __html: this.props.intro }} />
        <div className='timeline--nodes'>{nodes}</div>
        <div className='timeline--credits'>
          <h3>Credits</h3>
          <p>Kari Anne Andersen</p>
          <p>Kristin Breivik</p>
          <p>Eyólfur Kristjánsson</p>
          <p>Ronnie Jespersen</p>
          <p>Marius Lundgård</p>
        </div>
      </div>
    );
  }
}
