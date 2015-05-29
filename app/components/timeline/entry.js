import React from 'react';

export default class TimelineEntry extends React.Component {
  constructor(props) {
    props = props || {};

    super(props);

    this.state = {
      isVisible: false,
      height: 0,
      offsetTop: 0
    }
  }

  componentDidMount(nextProps) {
    const $el = window.jQuery(React.findDOMNode(this));

    this.setState({
      height: $el.outerHeight(),
      offsetTop: $el.offset().top
    });
  }

  handleActivate(e) {
    e.preventDefault();

    if (this.props.onActivate) {
      this.props.onActivate('' + this.props.mediaId);
    }
  }

  render() {
    let className = 'timeline--node';

    if (this.props.isActive) {
      className += ' is-active';
    }

    return (
      <div onClick={ this.handleActivate.bind(this) } className={className}>
        <div className="timeline--node-label">{this.props.label}</div>
        <div className="timeline--node-body">{this.props.body}</div>
      </div>
    );
  }
}
