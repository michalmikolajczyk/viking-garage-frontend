import * as React from 'react';
import {
  Paper,
} from 'material-ui';
import Container from '../Container';
import UserMenu from './UserMenu';
import UserPhoto from './UserPhoto';

export default function UserEdit(props) {
  return (
    <Container close={true}>
      <UserMenu />
      <div className="user-edit">
        <Paper className="user-form">
          <div className="head">
            Profile Photo:
          </div>
          <UserPhoto />
        </Paper>

        <Paper className="user-form">
          <div className="head">
            Required Information:
          </div>
          <div className="body">
            Form body
          </div>
        </Paper>

        <Paper className="user-form">
          <div className="head">
            Optional Information:
          </div>
          <div className="body">
            Form body
          </div>
        </Paper>
      </div>
    </Container>
  );
}
