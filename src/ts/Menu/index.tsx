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
  Paper,
} from 'material-ui';
import i, { languages, changeLanguage } from '../i18n';
import c, { currencies, changeCurrency } from '../i18n/currency';
import IconWrap from '../IconWrap';

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

  const languageSelection = languages.map((val) => {
    return (
      <MenuItem
        primaryText={i(val.lang)}
        checked={val.code === i()}
        insetChildren={true}
        onTouchTap={() => {
          changeLanguage(val.code);
          props.refresh();
        }}
      />
    );
  });

  const currencySelection = currencies.map((val) => {
    return (
      <MenuItem
        primaryText={val}
        checked={val === c()}
        insetChildren={true}
        onTouchTap={() => {
          changeCurrency(val);
          props.refresh();
        }}
      />
    );
  });

  const menuItems = (
    <div className="menu">
      <MenuItem className="menu-item" containerElement={<Link to="/page/owner" />} primaryText={i('Bike Owners')} />
      <MenuItem className="menu-item" containerElement={<Link to="/page/guide" />} primaryText={i('Guides & Coaches')} />
      <MenuItem className="menu-item" containerElement={<Link to="/page/mechanic" />} primaryText={i('Mechanics')} />
      <MenuItem
        className="menu-item"
        primaryText={i().toUpperCase()}
        menuItems={languageSelection}
        leftIcon={<IconWrap icon="flag" aria="Choose your language" />}
        innerDivStyle={{ padding: '0px 16px 0px 50px' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      />
      <MenuItem
        className="menu-item"
        primaryText={c()}
        menuItems={currencySelection}
        leftIcon={<IconWrap icon="attach_money" aria="Choose your currency" />}
        innerDivStyle={{ padding: '0px 16px 0px 50px' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      />
      <MenuItem className="menu-item" containerElement={<Link to="/page/faq" />} primaryText={i('FAQ')} />
    </div>
  );

  return (
    <div>
      <IconMenu className="mobile-only" iconButtonElement={<IconButton><FontIcon className="fa fa-bars" /></IconButton>}>
        {menuItems}
      </IconMenu>
      <div className="mobile-hid">
        {menuItems}
      </div>
    </div>
  );
}
