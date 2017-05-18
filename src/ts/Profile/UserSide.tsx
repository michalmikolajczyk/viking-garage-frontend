import * as React from 'react';
import { Link } from 'react-router';
import i from '../i18n';

export default function UserSide(props) {
  return (
    <div className="user-side">
      <Link
        className="user-side-item"
        style={{ fontWeight: 'bold' }}
        to="/user/profile"
      >
        {i('Edit Profile')}
      </Link>
      <Link
        className="user-side-item"
        to="/user/reviews"
      >
        {i('Reviews')}
      </Link>
      <Link
        className="user-side-item"
        to="/user/stats"
      >
        {i('Your Stats')}
      </Link>
      <Link
        className="user-side-item"
        to="/user/summary"
      >
        {i('Summary')}
      </Link>
      <Link
        className="view-profile"
        to="/user/profile"
      >
        {i('View Profile')}
      </Link>
    </div>
  );
}
