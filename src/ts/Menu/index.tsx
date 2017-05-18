import * as React from 'react';
import { browserHistory } from 'react-router';
import {
  Divider,
  FontIcon,
  IconMenu,
  MenuItem,
  Paper,
} from 'material-ui';
import i from '../i18n';

export default function MenuVG(props) {
  function logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    props.update();
    browserHistory.push('/');
  };

  const user = JSON.parse(localStorage.getItem('user'));
  const image = user && user['image'];

  const iconButtonElement = image
  ? <MenuItem className="user-image" style={{ background: `url(${image})` }}/>
  : <FontIcon className="material-icons">account_circle</FontIcon>

  const paperStyle = {
    height: 30,
    width: 30,
  }

  const userSection = user ? (
    <IconMenu
      className="user-profile"
      iconButtonElement={<Paper style={paperStyle} circle={true}>{iconButtonElement}</Paper>}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      desktop={true}
    >
      <MenuItem primaryText={i('Profile')} href="/user/profile" />
      <MenuItem primaryText={i('Add offer')} href="/add-offer" />
      <MenuItem primaryText={i('Deals')} href="/deals" />
      <MenuItem primaryText={i('Messages')} href="user/inbox" />
      <MenuItem primaryText={i('Account')} href="user/account" />
      <Divider />
      <MenuItem primaryText={i('Log out')} onClick={logout} />
    </IconMenu>
  ) : (
    <div className="user">
      <MenuItem href="/signin" className="menu-item" primaryText={i('Sign in')} />
      <MenuItem href="/login" className="menu-item" primaryText={i('Log in')} />
    </div>
  );


  return (
    <div className="menu">
      <MenuItem href="/bike-owners" className="menu-item" primaryText={i('Bike Owners')} />
      <MenuItem href="/guides-coaches" className="menu-item" primaryText={i('Guides & Coaches')} />
      <MenuItem href="/mechanics" className="menu-item" primaryText={i('Mechanics')} />
      <MenuItem href="/faq" className="menu-item" primaryText={i('FAQ')} />
      {userSection}
    </div>
  );
}
