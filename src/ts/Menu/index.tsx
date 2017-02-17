import * as React from 'react';
import {
  Divider,
  IconMenu,
  MenuItem,
} from 'material-ui';

export default function MenuVG (props) {

  const user = true

  const userImage = "https://scontent-waw1-1.cdninstagram.com/t51.2885-15/e35/15877344_344661349253204_5404343355553349632_n.jpg"

  const iconButtonElement = (
    <MenuItem
      className="user-image"
      style={{background: `url(${userImage})`}}
    >
    </MenuItem>)

  const userSection = user ? (
    <IconMenu
      className="user-profile"
      iconButtonElement={iconButtonElement}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      desktop={true}
    >
      <MenuItem primaryText="Profile" href="/profile" />
      <MenuItem primaryText="Add offer" href="/add-offer" />
      <MenuItem primaryText="Deals" href="/deals" />
      <MenuItem primaryText="Messages" href="/messages" />
      <MenuItem primaryText="Account" href="/account" />
      <Divider />
      <MenuItem primaryText="Log out" href="/logout" />
    </IconMenu>
  ) : (
    <div className="user">
      <MenuItem href="/signup" primaryText="Sign up" />
      <MenuItem href="/login" primaryText="Log in" />
    </div>
  )


  return (
    <div className="menu">
      <MenuItem href="/bike-owners" primaryText="Bike Owners" />
      <MenuItem href="/guides-coaches" primaryText="Guides &amp; Coaches" />
      <MenuItem href="/mechanics" primaryText="Mechanics" />
      <MenuItem href="/faq" primaryText="FAQ" />
      {userSection}
    </div>
  );
}
