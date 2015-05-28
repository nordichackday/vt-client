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

  //   if (nextProps.parentScrollTop === this.props.parentScrollTop) {
  //     return;
  //   }


  //   // console.log(entryHeight);

  //   if ((offsetTop + entryHeight) >= 0 && offsetTop <= this.props.parentHeight) {
  //     console.log('visible');
  //     this.setState({
  //       isVisible: true
  //     });

  //     // console.log('componentWillUpdate', this.props.intro, entryHeight);
  //   } else {
  //     this.setState({
  //       isVisible: false
  //     });
  //   }
  }

  // getClassName() {
  //   let className = 'timeline--entry';

  //   if (this.state.isVisible) {
  //     className == ' is-visible';
  //   }

  //   return className;
  // }

  render() {
    let className = 'timeline--entry';

    // console.log('------- render timeline entry', this.state);

    const offsetTop = this.state.offsetTop - this.props.parentScrollTop;
    const offsetBottom = offsetTop + this.state.height;

    console.log('>', offsetTop, offsetBottom, this.props.parentScrollTop);

    if (offsetBottom <= 0) {
      className += ' is-above-fold';
      // isInList = true;
      // $eventGroup.addClass('above-fold-top');
    } else {
      // $eventGroup.removeClass('above-fold-top');
    }

    // if (offsetTop >= ) {

    // }

  //   if ((this.state.offsetTop + this.state.height) >= 0 && this.state.offsetTop <= this.props.parentHeight) {
  //     console.log('visible');
  //     className == ' is-visible';
  // //     this.setState({
  // //       isVisible: true
  // //     });

  // //     // console.log('componentWillUpdate', this.props.intro, entryHeight);
  //   } else {
  // //     this.setState({
  // //       isVisible: false
  // //     });
  //   }

    return (
      <div className={className}>{this.props.intro}</div>
    );
  }
}
