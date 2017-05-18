import * as React from 'react';
import { Link } from 'react-router';

export default function UserSide(props) {
  return (
    <div className="user-side">
      <Link
        className="user-side-item"
        style={{ fontWeight: 'bold' }}
        to="/user/profile"
      >
        Edit Profile
      </Link>
      <Link
        className="user-side-item"
        to="/user/reviews"
      >
        Reviews
      </Link>
      <Link
        className="user-side-item"
        to="/user/stats"
      >
        Your Stats
      </Link>
      <Link
        className="user-side-item"
        to="/user/summary"
      >
        Summary
      </Link>
      <Link
        className="view-profile"
        to="/user/profile"
      >
        View Profile
      </Link>
    </div>
  );
}
