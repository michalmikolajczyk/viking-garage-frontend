import * as React from 'react';
import { Link } from 'react-router';
import i from '../i18n';

export default function UserMenu(props) {
  return (
    <div className="user-menu">
      <Link
        className="user-menu-item"
        style={{fontWeight: 'bold'}}
        title={i('Profile')}
        to="/user/profile"
      >
        {i('Profile')}
      </Link>
      <Link
        className="user-menu-item"
        title={i('Inbox')}
        to="/user/inbox"
      >
        {i('Inbox')}
      </Link>
      <Link
        className="user-menu-item"
        title={i('Your Rides')}
        to="/user/rides"
      >
        {i('Your Rides')}
      </Link>
      <Link
        className="user-menu-item"
        title={i('Your Offers')}
        to="/user/offers"
      >
        {i('Your Offers')}
      </Link>
      <Link
        className="user-menu-item"
        title={i('Account')}
        to="/user/account"
      >
        {i('Account')}
      </Link>
    </div>
  );
}
