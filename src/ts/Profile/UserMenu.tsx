import * as React from 'react';
import { Link } from 'react-router';

export default function UserMenu(props) {
  return (
    <div className="user-menu">
      <Link
        className="user-menu-item"
        style={{fontWeight: 'bold'}}
        title="Profile"
        to="/user/profile"
      >
        Profile
      </Link>
      <Link
        className="user-menu-item"
        title="Inbox"
        to="/user/inbox"
      >
        Inbox
      </Link>
      <Link
        className="user-menu-item"
        title="Your Rides"
        to="/user/rides"
      >
        Your Rides
      </Link>
      <Link
        className="user-menu-item"
        title="Your Offers"
        to="/user/offers"
      >
        Your Offers
      </Link>
      <Link
        className="user-menu-item"
        title="Account"
        to="/user/account"
      >
        Account
      </Link>
    </div>
  );
}
