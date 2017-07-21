import * as React from 'react';

// Scroll logic based on https://gist.github.com/Warry/4254579
export default class AppBarWrap extends React.Component<any, any> {
  requestId: number;
  state = { visible: false };

  componentDidMount() {
    this.handleScroll();
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.requestId);
  }

  handleScroll = () => {
    if (this.state.visible && window.scrollY === 0) {
      this.setState({ visible: false });
    } else {
      if (!this.state.visible && window.scrollY > 0) {
        this.setState({ visible: true });
      }
    }
    this.requestId = window.requestAnimationFrame(this.handleScroll);
  }

  render() {
    return (
      <div className={this.state.visible ? 'border' : ''}>
        {this.props.children}
      </div>
    );
  }
}
