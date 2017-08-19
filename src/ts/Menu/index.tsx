import * as React from 'react';
import * as _ from 'lodash';
import {
  browserHistory,
  Link,
} from 'react-router';
import {
  Divider,
  FontIcon,
  IconButton,
  IconMenu,
  MenuItem,
  SelectField,
  Paper,
} from 'material-ui';
import LanguageSelection from '../i18n/LanguageSelection';
import CurrencySelection from '../i18n/CurrencySelection';
import i from '../i18n';

interface MenuVGProps { refresh: () => void; }

export default function MenuVG(props: MenuVGProps) {
  // function logout() {
  //   localStorage.removeItem('jwt');
  //   localStorage.removeItem('user');
  //   props.update();
  //   browserHistory.push('/');
  // };

  // const user = typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : '';
  // const image = user && user['image'];

  // const iconButtonElement = image
  // ? <MenuItem className="user-image" style={{ background: `url(${image})` }}/>
  // : <IconWrap icon="account_circle" aria="user account" />

  // const paperStyle = {
  //   height: 30,
  //   width: 30,
  // }

  // const userSection = user ? (
  //   <IconMenu
  //     className="user-profile"
  //     iconButtonElement={<Paper style={paperStyle} circle={true}>{iconButtonElement}</Paper>}
  //     anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
  //     desktop={true}
  //   >
  //     <MenuItem primaryText={i('Profile')} containerElement={<Link to="/user/profile" />} />
  //     <MenuItem primaryText={i('Add offer')} containerElement={<Link to="/add-offer" />} />
  //     <MenuItem primaryText={i('Deals')} containerElement={<Link to="/deals" />} />
  //     <MenuItem primaryText={i('Messages')} containerElement={<Link to="/user/inbox" />} />
  //     <MenuItem primaryText={i('Account')} containerElement={<Link to="/user/account" />} />
  //     <Divider />
  //     <MenuItem primaryText={i('Log out')} onClick={logout} />
  //   </IconMenu>
  // ) : (
  //   <div className="user">
  //     <MenuItem className="menu-item" containerElement={<Link to="/signin" />} primaryText={i('Sign in')} />
  //     <MenuItem className="menu-item" containerElement={<Link to="/login" />} primaryText={i('Log in')} />
  //   </div>
  // );

  const menuItems = (
    <div className="menu">
      <MenuItem className="menu-item" containerElement={<Link to="/page/owner" />} primaryText={i('Bike Owners')} />
      <MenuItem className="menu-item" containerElement={<Link to="/page/guide" />} primaryText={i('Guides & Coaches')} />
      <MenuItem className="menu-item" containerElement={<Link to="/page/mechanic" />} primaryText={i('Mechanics')} />
      <MenuItem className="menu-item" containerElement={<Link to="/page/faq" />} primaryText={i('FAQ')} />
      <LanguageSelection {...props} />
      <CurrencySelection {...props} />
    </div>
  );

  return (
    <div>
      <IconMenu 
        className="mobile-tablet-only"
        iconButtonElement={<IconButton><FontIcon className="fa fa-bars" /></IconButton>}
        useLayerForClickAway={true}
      >
        {menuItems}
      </IconMenu>
      <div className="mobile-tablet-hid">
        {menuItems}
      </div>
    </div>
  );
}
