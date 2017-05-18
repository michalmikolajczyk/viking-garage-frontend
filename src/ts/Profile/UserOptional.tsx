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
          name="phone"
          fullWidth={true}
          disabled={disabled}
          floatingLabelText={i('Phone Number')}
          validations="isNumeric"
          validationError={i('Wrong phone number!')}
        />
        <FormsyText
          name="emergency"
          fullWidth={true}
          disabled={disabled}
          floatingLabelText={i('Emergency Contact')}
          validations="isNumeric"
          validationError={i('Wrong phone number!')}
        />
        <FormsyText
          name="city"
          fullWidth={true}
          disabled={disabled}
          floatingLabelText={i('City')}
          validations="isAlpha"
          validationError={i('Wrong city name!')}
        />
        <FormsyText
          name="country"
          fullWidth={true}
          disabled={disabled}
          floatingLabelText={i('Country')}
          validations="isAlpha"
          validationError={i('Wrong country name!')}
        />
        <FormsyText
          name="brief"
          fullWidth={true}
          disabled={disabled}
          floatingLabelText={i('Describe Yourself')}
          multiLine={true}
          rows={5}
          rowsMax={5}
        />
     </div>
    </Paper>
  );
}
