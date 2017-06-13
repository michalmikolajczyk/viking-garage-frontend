import * as React from 'react';
import { Paper } from 'material-ui';
import { FormsyText } from 'formsy-material-ui/lib';
import i from '../i18n';

export default function UserOptional(props) {
  const { user } = props;
  const disabled = !user;
  return (
    <Paper className="user-form">
      <div className="head">
        {i('Optional Information')}
      </div>
      <div className="body">
        <FormsyText
          id="user-profile-phone"
          name="phone"
          fullWidth={true}
          disabled={disabled}
          value={user && user.phone}
          floatingLabelText={i('Phone Number')}
          validations="isNumeric"
          validationError={i('Wrong phone number!')}
        />
        <FormsyText
          id="user-profile-emergency"
          name="emergency"
          fullWidth={true}
          disabled={disabled}
          value={user && user.emergency}
          floatingLabelText={i('Emergency Contact')}
          validations="isNumeric"
          validationError={i('Wrong phone number!')}
        />
        <FormsyText
          id="user-profile-city"
          name="city"
          fullWidth={true}
          disabled={disabled}
          value={user && user.city}
          floatingLabelText={i('City')}
          validations="isAlpha"
          validationError={i('Wrong city name!')}
        />
        <FormsyText
          id="user-profile-country"
          name="country"
          fullWidth={true}
          disabled={disabled}
          value={user && user.country}
          floatingLabelText={i('Country')}
          validations="isAlpha"
          validationError={i('Wrong country name!')}
        />
        <FormsyText
          id="user-profile-brief"
          name="brief"
          fullWidth={true}
          disabled={disabled}
          value={user && user.brief}
          floatingLabelText={i('Describe Yourself')}
          multiLine={true}
          rows={5}
          rowsMax={5}
        />
     </div>
    </Paper>
  );
}
