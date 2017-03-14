import * as React from 'react';
import { Link } from 'react-router';
import { AppBar } from 'material-ui';
import Menu from '../Menu';
import { default as Search } from '../Search/Location';
import debug from 'debug';
const log = debug('app:AppBar');

// Scroll logic based on https://gist.github.com/Warry/4254579
export default class AppBarVG extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.handleScroll();
  }

  componentWillUnmount() {
    this.handleScroll = () => null;
  }

  handleScroll() {
    if (typeof window !== 'undefined') {
      if (this.state.visible && window.scrollY === 0) {
        this.setState({ visible: false });
        this.forceUpdate();
      } else {
        if (!this.state.visible && window.scrollY > 0) {
          this.setState({ visible: true });
          this.forceUpdate();
        }
      }
      // there is a polyfill in js/polyfills.js
      window.requestAnimationFrame(this.handleScroll);
    }
  }

  search(filter) { log('AppBar search change', filter); }

  render() {
    const line = this.state.visible && <div className="app-bar-line"></div>;
    const search = this.state.visible && <Search icon="search" filter={this.search} />;

    return (
      <AppBar
        className="app-bar"
        zDepth={0} // switch off box-shadow
        title={search}
        showMenuIconButton={true}
        iconElementLeft={<Link className={'title' + (this.state.visible ? ' border' : '')} to="/">&#5809;</Link>}
        iconElementRight={<Menu update={() => this.forceUpdate()} />}
      >
        {line}
      </AppBar>);
  }
}
