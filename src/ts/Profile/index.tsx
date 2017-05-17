import * as React from 'react';
import {
  Paper,
} from 'material-ui';
import Container from '../Container';
import UserMenu from './UserMenu';

export default function UserEdit(props) {
  return (
    <Container close={true}>
      <UserMenu />
      <div className="user-edit cont">
        <div className="form">
          <div className="header">
            Profile Photo
          </div>
        </div>
      </div>
    </Container>
  );
}
