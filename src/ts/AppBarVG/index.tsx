import * as React from 'react';
import { Link } from 'react-router';
import { AppBar } from 'material-ui';
import {
  IFiltersFuncs,
  IFiltersValue,
} from '../typings';
import AppBarWrap from './AppBarWrap';
import FullText from '../Search/FullText';
import Raido from '../Raido';
import Menu from '../Menu';

interface AppBarVGProps {
  refresh: () => void;
  filtersFuncs: IFiltersFuncs;
  filtersValue: IFiltersValue;
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
