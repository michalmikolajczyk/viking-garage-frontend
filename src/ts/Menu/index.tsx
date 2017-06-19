import * as React from 'react';
import {
  browserHistory,
  Link,
} from 'react-router';
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

  const user = typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : '';
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
      <MenuItem primaryText={i('Profile')} containerElement={<Link to="/user/profile" />} />
      <MenuItem primaryText={i('Add offer')} containerElement={<Link to="/add-offer" />} />
      <MenuItem primaryText={i('Deals')} containerElement={<Link to="/deals" />} />
      <MenuItem primaryText={i('Messages')} containerElement={<Link to="/user/inbox" />} />
      <MenuItem primaryText={i('Account')} containerElement={<Link to="/user/account" />} />
      <Divider />
      <MenuItem primaryText={i('Log out')} onClick={logout} />
    </IconMenu>
  ) : (
    <div className="user">
      <MenuItem className="menu-item" containerElement={<Link to="/signin" />} primaryText={i('Sign in')} />
      <MenuItem className="menu-item" containerElement={<Link to="/login" />} primaryText={i('Log in')} />
    </div>
  );


  return (
    <div className="menu">
      <MenuItem className="menu-item" containerElement={<Link to="/page/owner" />} primaryText={i('Bike Owners')} />
      <MenuItem className="menu-item" containerElement={<Link to="/page/guide" />} primaryText={i('Guides & Coaches')} />
      <MenuItem className="menu-item" containerElement={<Link to="/page/mechanic" />} primaryText={i('Mechanics')} />
      <MenuItem className="menu-item" containerElement={<Link to="/page/faq" />} primaryText={i('FAQ')} />
      {userSection}
    </div>
  );
}
