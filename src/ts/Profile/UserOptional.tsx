import * as React from 'react';
import {
  MenuItem,
  Paper,
} from 'material-ui';
import {
  FormsyCheckbox,
  FormsyDate,
  FormsyText,
  FormsySelect,
} from 'formsy-material-ui/lib';
import i from '../i18n';

export default function UserOptional(props) {
  return (
    <Paper className="user-form">
      <div className="head">
        Optional Information
      </div>
      <div className="body">
        <FormsyText
          name="firstname"
          required={true}
          fullWidth={true}
          floatingLabelText={i('First Name')}
          validations="minLength:3"
          validationError={i('First name too short! Minimum 3 chars')}
        />
        <FormsyText
          name="lastname"
          required={true}
          fullWidth={true}
          floatingLabelText={i('Last Name')}
          validations="minLength:3"
          validationError={i('Last name too short! Minimum 3 chars')}
        />
        <FormsyDate
          name="birthday"
          floatingLabelText={i('Date of birth')}
          required={true}
          fullWidth={true}
        />
        <FormsySelect
          name="sex"
          floatingLabelText={i('I am')}
          fullWidth={true}
          required={true}
        >
          <MenuItem key="female" value="female" primaryText="Female" />
          <MenuItem key="male" value="male" primaryText="Male" />
        </FormsySelect>
        <FormsyText
          name="email"
          required={true}
          fullWidth={true}
          floatingLabelText={i('E-mail Address')}
          validations="isEmail"
          validationError={i('Wrong e-mail address!')}
        />
        <FormsyText
          name="phone"
          fullWidth={true}
          floatingLabelText={i('Phone Number')}
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
          floatingLabelText="Describe yourself"
          multiLine={true}
          rows={5}
          fullWidth={true}
          rowsMax={5}
        />
      </div>
    </Paper>
  );
}
