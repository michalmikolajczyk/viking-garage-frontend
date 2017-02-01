import React from 'react';
import {
  FontIcon,
} from 'material-ui';
import 'Footer.scss';

const styles = {
  iconStyle: {
    paddingTop: 20,
    paddingRight: 30,
    cursor: 'pointer',
  },
  iconMadeby: {
    paddingTop: 20,
    fontSize: 18,
  }
}

export default function Footer (props) {

  return (
    <div className="footer">
      <div className="connect">
        Connect with us:
        <div className="nowrap">
          <a href="https://vikinggarage.slack.com" target="_blank">
            <FontIcon style={styles.iconStyle} color="white" hoverColor="#AD000D" className="fa fa-slack" />
          </a>
          <a href="http://stackoverflow.com/users/2445063/wiherek" target="_blank">
            <FontIcon style={styles.iconStyle} color="white" hoverColor="#AD000D" className="fa fa-stack-overflow" />
          </a>
          <a href="https://www.facebook.com/michal.mikolajczyk" target="_blank">
            <FontIcon style={styles.iconStyle} color="white" hoverColor="#AD000D" className="fa fa-facebook-square" />
          </a>
          <a href="https://www.instagram.com/wiherek89/" target="_blank">
            <FontIcon style={styles.iconStyle} color="white" hoverColor="#AD000D" className="fa fa-instagram" />
          </a>
          <a href="https://github.com/michalmikolajczyk/" target="_blank">
            <FontIcon style={styles.iconStyle} color="white" hoverColor="#AD000D" className="fa fa-github" />
          </a>
        </div>
      </div>
      <div className="madeby">
        Made with&#160;&#160;
        <FontIcon style={styles.iconMadeby} color="white" hoverColor="#AD000D" className="fa fa-fire" />
        <div className="nowrap">
          <FontIcon style={{...styles.iconMadeby, paddingRight: 10}} color="white" className="fa fa-copyright" />
          2016 <span className="author">Michal Mikolajczyk</span>
        </div>
      </div>
    </div>
  );
}
