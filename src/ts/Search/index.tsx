import React from 'react';
import {
  FontIcon,
  TextField,
} from 'material-ui';

const styles = {
  textField: {
    width: 'initial',
    flex: 1,
  },
  inputStyle: {
    paddingLeft: 24,
  },
  icon: {
    width: 24,
    fontSize: 18,
    marginTop: 14,
    marginRight: -24,
  },
}

export default function Search(props) {
  return (
    <div className="cont search">
      <FontIcon className="material-icons" style={styles.icon}>
        location_on
      </FontIcon>
      <TextField
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.inputStyle}
        hintText="Gran Canaria"/>
      <FontIcon className="material-icons" style={styles.icon}>
        keyboard_arrow_down
      </FontIcon>
      <TextField
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.inputStyle}
        hintText="Dirtbike" />
      <FontIcon className="material-icons" style={styles.icon}>
        today
      </FontIcon>
      <TextField
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.inputStyle}
        hintText="Today" />
      <FontIcon className="material-icons" style={styles.icon}>
        date_range
      </FontIcon>
      <TextField
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.inputStyle}
        hintText="19/01/2017" />
    </div>
  );
}
