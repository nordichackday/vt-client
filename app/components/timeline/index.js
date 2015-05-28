import React from 'react';
import TimelineEntry from './entry';

export default class Timeline extends React.Component {
  constructor(props) {
    props = props || {};
    super(props);

    this.state = {
      height: 0,
      scrollTop: 0
    };
  }

  componentDidMount() {
    console.log('test');

    const $win = window.jQuery(window);
    const $el = window.jQuery(React.findDOMNode(this));

    $win.on('scroll', () => {
      console.log('scroll');

      this.setState({
        scrollTop: $win.scrollTop()
      });
    });

    this.setState({
      height: $el.outerHeight()
    });
  }

  render() {
    console.log('------- render timeline');

    const entries = this.props.entries.map((entry, i) => {
      return <TimelineEntry parentHeight={this.state.height} parentScrollTop={this.state.scrollTop} {...entry} key={i} />
    });

    return (
      <div className='timeline'>
        <div className='timeline--entries'>{entries}</div>
      </div>
    );
  }
}
