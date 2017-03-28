import * as React from 'react';
import { browserHistory } from 'react-router';
import {
  Divider,
  IconMenu,
  MenuItem,
} from 'material-ui';

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
      <MenuItem primaryText="Profile" href="/profile" />
      <MenuItem primaryText="Add offer" href="/offer/create" />
      <MenuItem primaryText="Deals" href="/deals" />
      <MenuItem primaryText="Messages" href="/messages" />
      <MenuItem primaryText="Account" href="/account" />
      <Divider />
      <MenuItem primaryText="Log out" onClick={logout} />
    </IconMenu>
  ) : (
    <div className="user">
      <MenuItem href="/signin" primaryText="Sign in" className="menu-item" />
      <MenuItem href="/login" primaryText="Log in" className="menu-item" />
    </div>
  );


  return (
    <div className="menu">
      <MenuItem href="/bike-owners" primaryText="Bike Owners" className="menu-item" />
      <MenuItem href="/guides-coaches" primaryText="Guides &amp; Coaches" className="menu-item" />
      <MenuItem href="/mechanics" primaryText="Mechanics" className="menu-item" />
      <MenuItem href="/faq" primaryText="FAQ" className="menu-item" />
      {userSection}
    </div>
  );
}
