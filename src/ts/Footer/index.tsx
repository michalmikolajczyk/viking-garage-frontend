import * as React from 'react';
import {
  FontIcon,
} from 'material-ui';

const iconStyle = {
  fontSize: 14,
  paddingRight: 7,
};

export default function Footer(props) {
  return (
    <div className="footer">
      <ul className="contact">
        <li>
          <a href="https://www.instagram.com/wiherek89/" target="_blank">
            INSTAGRAM
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/michal.mikolajczyk" target="_blank">
            FACEBOOK
          </a>
        </li>
        <li>
          <a href="https://github.com/michalmikolajczyk/" target="_blank">
            GITHUB
          </a>
        </li>
        <li>
          <a href="mailto:michal@vikinggarage.com" target="_blank">
            E-MAIL
          </a>
        </li>
        <li>
          <a href="https://vikinggarage.slack.com" target="_blank">
            SLACK
          </a>
        </li>
        <li>
          <a href="tel:+48697951264" target="_blank">
            PHONE
          </a>
        </li>
        <li>
          <a href="skype:michaljanmikolajczyk?chat" target="_blank">
            SKYPE
          </a>
        </li>
      </ul>
      <div className="madeby">
        <div className="nowrap">
          <FontIcon style={iconStyle} color="white" className="fa fa-copyright" />
          2017 Michal Mikolajczyk
        </div>
      </div>
    </div>
  );
}
