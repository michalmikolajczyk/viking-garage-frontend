import * as React from 'react';
import {
  IconButton,
  IconMenu,
  FlatButton,
  FontIcon,
  MenuItem,
} from 'material-ui';

export default function Menu (props) {
  const user = true

  const iconButtonElement = (
    <MenuItem>
      <FontIcon
        style={{fontSize: 18}}
        className='fa fa-ellipsis-v'/>
    </MenuItem>)

  const userSection = user ? (
    <IconMenu className="user-profile" iconButtonElement={iconButtonElement} >
      <MenuItem primaryText="Calibri" />
      <MenuItem primaryText="Courier" />
      <MenuItem primaryText="Verdana" />
    </IconMenu>
  ) : (
    <div className="user">
      <MenuItem href="signup" primaryText="Sign up" />
      <MenuItem href="login" primaryText="Log in" />
    </div>
  )


  return (
    <div className="menu">
      <MenuItem href="/bike_owners" primaryText="Bike Owners" />
      <MenuItem href="/guides_coaches" primaryText="Guides &amp; Coaches" />
      <MenuItem href="/mechanics" primaryText="Mechanics" />
      <MenuItem href="/faq" primaryText="FAQ" />
      {userSection}
    </div>
  );
}
