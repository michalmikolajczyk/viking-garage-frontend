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
    <div className="cont">
      <FontIcon
        style={styles.icon}
        className="fa fa-map-marker" />
      <TextField
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.inputStyle}
        hintText="Gran Canaria"/>
      <FontIcon
        style={styles.icon}
        className="fa fa-angle-down" />
      <TextField
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.inputStyle}
        hintText="Dirtbike" />
      <FontIcon
        style={styles.icon}
        className="fa fa-calendar" />
      <TextField
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.inputStyle}
        hintText="Today" />
      <FontIcon
        style={styles.icon}
        className="fa fa-calendar" />
      <TextField
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.inputStyle}
        hintText="19/01/2017" />
    </div>
  );
}
