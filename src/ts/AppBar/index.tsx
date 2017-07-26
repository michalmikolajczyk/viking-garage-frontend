import * as React from 'react';
import { Link } from 'react-router';
import { AppBar } from 'material-ui';
import AppBarWrap from './AppBarWrap';
import Search from '../Search';
import Raido from '../Raido';
import Menu from '../Menu';

export default function AppBarVG(props) {
  return (
    <AppBarWrap>
      <AppBar
        zDepth={0}
        className="app-bar"
        showMenuIconButton={true}
        title={<Search {...props} />}
        titleStyle={{ padding: '0 10px' }}
        iconElementRight={<Menu refresh={props.refresh} />}
        iconElementLeft={<Link to="/" className="title"><Raido /></Link>}
      />
    </AppBarWrap>);
}
