import React from 'react';
import {
  FontIcon,
} from 'material-ui';
import { muiThemeable } from 'material-ui/styles';

const styles = {
  wrap: {
    width: '100%',
    height: 300,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: 60,
    backgroundColor: 'black',
    color: 'white',
  },
  connect: {
    flex: 1,
  },
  madeby: {
    flex: 1,
    textAlign: 'right',
  },
  icon: {
    paddingTop: 20,
    paddingRight: 30,
    cursor: 'pointer',
  },
}

export default muiThemeable()(Footer);

function Footer (props) {
  return (
    <div style={{...styles.wrap, fontFamily: props.muiTheme.fontFamily}}>
      <div style={styles.connect}>
        Connect with us:
        <div style={{whiteSpace: 'nowrap'}}>
          <a href="https://vikinggarage.slack.com" target="_blank">
            <FontIcon style={styles.icon} color="white" hoverColor="#AD000D" className="fa fa-slack" />
          </a>
          <a href="http://stackoverflow.com/users/2445063/wiherek" target="_blank">
            <FontIcon style={styles.icon} color="white" hoverColor="#AD000D" className="fa fa-stack-overflow" />
          </a>
          <a href="https://www.facebook.com/michal.mikolajczyk" target="_blank">
            <FontIcon style={styles.icon} color="white" hoverColor="#AD000D" className="fa fa-facebook-square" />
          </a>
          <a href="https://www.instagram.com/wiherek89/" target="_blank">
            <FontIcon style={styles.icon} color="white" hoverColor="#AD000D" className="fa fa-instagram" />
          </a>
          <a href="https://github.com/michalmikolajczyk/" target="_blank">
            <FontIcon style={styles.icon} color="white" hoverColor="#AD000D" className="fa fa-github" />
          </a>
       </div>
      </div>
      <div style={styles.madeby}>
        Made with&#160;&#160;
        <FontIcon style={{...styles.icon, fontSize: 18, paddingRight: 0}} color="white" hoverColor="#AD000D" className="fa fa-fire" />
        <div style={{whiteSpace: 'nowrap'}}>
          <FontIcon style={{...styles.icon, fontSize: 18, paddingRight: 10}} color="white" className="fa fa-copyright" />
          2016 <span style={{textDecoration: 'underline'}}>Michal Mikolajczyk</span>
        </div>
      </div>
    </div>
   );
}
