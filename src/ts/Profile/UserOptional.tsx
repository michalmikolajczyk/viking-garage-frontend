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
        Optional Information
      </div>
      <div className="body">
        <FormsyText
          name="phone"
          fullWidth={true}
          floatingLabelText={i('Phone Number')}
          validations="isNumeric"
          validationError={i('Wrong phone number!')}
        />
        <FormsyText
          name="phone"
          fullWidth={true}
          floatingLabelText={i('Emergency Contact')}
          validations="isNumeric"
          validationError={i('Wrong phone number!')}
        />
        <FormsyText
          name="city"
          fullWidth={true}
          floatingLabelText={i('City')}
          validations="isAlpha"
          validationError={i('Wrong city name!')}
        />
        <FormsyText
          name="country"
          fullWidth={true}
          floatingLabelText={i('Country')}
          validations="isAlpha"
          validationError={i('Wrong country name!')}
        />
        <FormsyText
          name="brief"
          floatingLabelText="Describe Yourself"
          multiLine={true}
          rows={5}
          fullWidth={true}
          rowsMax={5}
        />
     </div>
    </Paper>
  );
}
