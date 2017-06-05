import * as React from 'react';
import { Paper } from 'material-ui';
import {
  FormsyDate,
  FormsyText,
} from 'formsy-material-ui/lib';
import * as moment from 'moment';
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
          id="user-profile-firstname"
          name="firstname"
          disabled={disabled}
          value={user && user.firstname}
          required={true}
          fullWidth={true}
          validations="minLength:3"
          floatingLabelText={i('First Name')}
          validationError={i('Please add more characters (minimum 3)')}
        />
        <FormsyText
          id="user-profile-lastname"
          name="lastname"
          disabled={disabled}
          value={user && user.lastname}
          required={true}
          fullWidth={true}
          validations="minLength:3"
          floatingLabelText={i('Last Name')}
          validationError={i('Please add more characters (minimum 3)')}
        />
        <FormsyDate
          id="user-profile-birthday"
          name="birthday"
          disabled={disabled}
          required={true}
          fullWidth={true}
          value={user && moment(user.birthday).toDate()}
          floatingLabelText={i('Date of birth')}
        />
        <FormsyText
          id="user-profile-email"
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
