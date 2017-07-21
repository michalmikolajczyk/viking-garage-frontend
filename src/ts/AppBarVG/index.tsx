import * as React from 'react';
import { Link } from 'react-router';
import { AppBar } from 'material-ui';
import AppBarWrap from './AppBarWrap';
import FullText from '../Search/FullText';
import Raido from '../Raido';
import Menu from '../Menu';

interface AppBarVGProps {
  typeFilter: (type: any) => void;
  dateFilter: (date: any) => void;
  locationFilter: (location: any) => void;
  distanceFilter: (distance: any) => void;
}

export default function AppBarVG(props: AppBarVGProps) {
  return (
    <AppBarWrap>
      <AppBar
        zDepth={0}
        className="appbar"
        showMenuIconButton={true}
        title={<FullText {...props} />}
        titleStyle={{ padding: '0 10px' }}
        iconElementRight={<Menu refresh={props.refresh} />}
        iconElementLeft={<Link to="/" className="title"><Raido /></Link>}
      />
    </AppBarWrap>
  );
}
