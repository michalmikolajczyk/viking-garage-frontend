import * as React from 'react';
import { Link } from 'react-router';
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
      <div className="contact">
        <div>
          <a href="https://www.instagram.com/vikinggarage" target="_blank">INSTAGRAM</a>
        </div>
        <div>
          <a href="https://www.facebook.com/vikinggarage" target="_blank">FACEBOOK</a>
        </div>
        <div>
          <a href="https://github.com/michalmikolajczyk/" target="_blank">GITHUB</a>
        </div>
        <div>
          <a href="mailto:ride@vikinggarage.com" target="_blank">
            E-MAIL
            <span className="mobile-hid"> ride@vikinggarage.com</span>
          </a>
        </div>
        <div>
          <a href="https://vikinggarage.slack.com" target="_blank">SLACK</a>
        </div>
        <div>
          <a href="tel:+48697951264" target="_blank">
            PHONE &amp; WHATSAPP
            <span className="mobile-hid"> +48 697 951 264</span>
          </a>
          <span className="mobile-hid"> | <a href="tel:+48667772402" target="_blank">+48 667 772 402</a></span>
        </div>
        <div className="right">
          <a href="skype:michaljanmikolajczyk?chat" target="_blank">SKYPE</a>
        </div>
        <div className="right">
          <Link to="/privacy-policy">PRIVACY POLICY</Link>
        </div>
        <div className="right">
          <Link to="/terms-of-service">TERMS OF SERVICE</Link>
        </div>
        <div className="right">
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="copyright">
          <FontIcon style={iconStyle} color="white" className="fa fa-copyright" />
          2017 VIKING GARAGE
        </div>
      </div>
    </div>
  );
}
