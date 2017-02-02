import React, {Component} from 'react';
import {throttle} from 'lodash';

export default class AppBarLine extends Component<any, any> {
  
  constructor(props) {
    super(props);
    this.state = {visible: false};
    this.handleScroll = throttle(this.handleScroll.bind(this), 100);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (this.state.visible && window.scrollY === 0) {
      this.setState({visible: false});
      this.forceUpdate();
    } else {    
      if (!this.state.visible && window.screenY > 0) {
        this.setState({visible: true});
        this.forceUpdate();
      }
    }
  }

  render() {
    if (this.state.visible) {
      return (<div className="app-bar-line"></div>);
    }
    return null;
  }
}
