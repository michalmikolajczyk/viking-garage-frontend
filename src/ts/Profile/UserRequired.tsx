import * as React from 'react';
import { Paper } from 'material-ui';
import {
  FormsyDate,
  FormsyText,
} from 'formsy-material-ui/lib';
import i from '../i18n';

export default function UserRequired(props) {
  const { user } = props;
  const disabled = !user;
  return (
    <Paper className="user-form">
      <div className="head">
        {i('Required Information')}
      </div>
      <div className="body">
        <FormsyText
          name="firstname"
          disabled={disabled}
          value={user && user.firstname}
          required={true}
          fullWidth={true}
          validations="minLength:3"
          floatingLabelText={i('First Name')}
          validationError={i('First name too short! Minimum 3 chars')}
        />
        <FormsyText
          name="lastname"
          disabled={disabled}
          value={user && user.lastname}
          required={true}
          fullWidth={true}
          validations="minLength:3"
          floatingLabelText={i('Last Name')}
          validationError={i('Last name too short! Minimum 3 chars')}
        />
        <FormsyDate
          name="birthday"
          disabled={disabled}
          required={true}
          fullWidth={true}
          value={user && user.birthday}
          floatingLabelText={i('Date of birth')}
        />
        <FormsyText
          name="email"
          disabled={disabled}
          value={user && user.email}
          required={true}
          fullWidth={true}
          validations="isEmail"
          floatingLabelText={i('E-mail Address')}
          validationError={i('Wrong e-mail address!')}
        />
      </div>
    </Paper>
  );
}
