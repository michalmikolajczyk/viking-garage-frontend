import * as React from 'react';
import { browserHistory } from 'react-router';
import {
  Divider,
  IconMenu,
  MenuItem,
} from 'material-ui';
import i from '../i18n';

export default function MenuVG(props) {
  function logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    props.update();
    browserHistory.push('/');
  };

  const user = localStorage.getItem('user');
  const userImage = 'https://scontent-waw1-1.cdninstagram.com/t51.2885-15/e35/15877344_344661349253204_5404343355553349632_n.jpg';

  const iconButtonElement = (
    <MenuItem
      className="user-image"
      style={{ background: `url(${userImage})` }}
    >
    </MenuItem>);

  const userSection = user ? (
    <IconMenu
      className="user-profile"
      iconButtonElement={iconButtonElement}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      desktop={true}
    >
      <MenuItem primaryText={i('Profile')} href="/profile" />
      <MenuItem primaryText={i('Add offer')} href="/add-offer" />
      <MenuItem primaryText={i('Deals')} href="/deals" />
      <MenuItem primaryText={i('Messages')} href="/messages" />
      <MenuItem primaryText={i('Account')} href="/account" />
      <Divider />
      <MenuItem primaryText={i('Log out')} onClick={logout} />
    </IconMenu>
  ) : (
    <div className="user">
      <MenuItem href="/signin" primaryText={i('Sign in')} />
      <MenuItem href="/login" primaryText={i('Log in')} />
    </div>
  );


  return (
    <div className="menu">
      <MenuItem href="/bike-owners" primaryText={i('Bike Owners')} />
      <MenuItem href="/guides-coaches" primaryText={i('Guides & Coaches')} />
      <MenuItem href="/mechanics" primaryText={i('Mechanics')} />
      <MenuItem href="/faq" primaryText={i('FAQ')} />
      {userSection}
    </div>
  );
}
