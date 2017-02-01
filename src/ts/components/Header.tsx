import React from 'react';
import { muiThemeable } from 'material-ui/styles';

const styles = {
  title: {
    flexGrow: 4,
    fontSize: 50,
    fontWeight: 300,
    margin: 0,
  },
  text: {
    flexGrow: 4,
    fontSize: 31,
    fontWeight: 200,
  },
  replace: {
    position: 'relative',
  },
  raido: {
    fontSize: 64,
    position: 'absolute',
    top: -20,
    left: 2,
  },
}

export default muiThemeable()(Header);

function Header (props) {
  return (
    <div style={{
      ...props.muiTheme.container,
      fontFamily: props.muiTheme.fontFamily,
    }}>
      <h1 style={styles.title}>
        VIKING
        <br />
          GA
          <span style={styles.replace}>
            &#160;&#160;
            <span style={{
              ...styles.raido,
              ...props.muiTheme.raido,
            }}>
              &#5809;
            </span>
          </span>
          AGE
      </h1>
      <div style={styles.text}>
        rent motorcycles and gear
        <br />
        find mechanics, coaches, trails
        <br />
        everywhere in the world
      </div>
    </div>
  );
}
