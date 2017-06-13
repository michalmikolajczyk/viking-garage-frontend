import * as React from 'react';
import { Link } from 'react-router';
import { AppBar } from 'material-ui';
import Raido from '../Raido';
import Menu from '../Menu';
import debug from 'debug';
const log = debug('app:AppBar');

// Scroll logic based on https://gist.github.com/Warry/4254579
export default class AppBarVG extends React.Component<any, any> {
  private requestId: number;

  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.handleScroll();
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.requestId);
  }

  handleScroll() {
    if (this.state.visible && window.scrollY === 0) {
      this.setState({ visible: false });
    } else {
      if (!this.state.visible && window.scrollY > 0) {
        this.setState({ visible: true });
      }
    }
    // there is a polyfill in js/polyfills.js
    this.requestId = window.requestAnimationFrame(this.handleScroll);
  }

  render() {
    const line = this.state.visible && <div className="app-bar-line"></div>;

    return (
      <AppBar
        className="app-bar"
        zDepth={0}
        showMenuIconButton={true}
        iconElementLeft={<Link className={'title' + (this.state.visible ? ' border' : '')} to="/"><Raido /></Link>}
        iconElementRight={<Menu update={() => this.forceUpdate()} />}
      >
        {line}
      </AppBar>);
  }
}
