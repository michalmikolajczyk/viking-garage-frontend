import * as React from 'react';
import { 
  Dialog,
  RaisedButton,
} from 'material-ui';
import i18n from '../i18n';
import * as Formsy from 'formsy-react';
import { 
  FormsyDate,
  FormsyText,
 } from 'formsy-material-ui/lib';
import * as api from './api';
const Cookie = require('js-cookie');
const i = i18n;

interface BlogFormState {
  open: boolean;
  canSubmit: boolean;
  submitted: boolean;
};

export default class BlogForm extends React.Component<any, BlogFormState> {
  constructor(props) {
    super(props);
    const post = {
      title: '',
      slug: '',
      body: '',
      author: null,
      createdAt: null,
      updatedAt: null,
    };
    this.state = { 
      open: false,
      canSubmit: false,
      submitted: false,
    };
  }

  componentDidMount() {
    if (!Cookie.get('newsletter')) setTimeout(() => this.setState({ open: true }), 3000);
  }

  disableButton = () => {
    this.setState({ canSubmit: false });
  }

  enableButton = () => {
    this.setState({ canSubmit: true });
  }

  handleClose = () => {
    if (!Cookie.get('newsletter')) this.setCookie();
    this.setState({ open: false });
  }

  setCookie = (accepted?) => {
    if (accepted) return Cookie.set('newsletter', 'accepted', { expires: 365 });
    return Cookie.set('newsletter', 'cancelled', { expires: 7 });
  }

  callMailChimp = model => api.newsletter({ email: model.email }).then(console.log);

  submit = (model) => {
    this.setState({ submitted: true }, () => {
      this.callMailChimp(model);
      this.setCookie(true);
      setTimeout(() => this.handleClose(), 2000);
    });
  }
  
  render() {
    const props = this.props;
    const form = (
      <div>
        <p>Sign up for the better motorcycle experience with VIKING GARAGE, delivered to your inbox once a week.</p>
        <Formsy.Form
          onValidSubmit={this.submit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
        >
          <FormsyText
            name="email"
            required
            hintText="Enter your email address"
            floatingLabelText="Email address"
            validations="isEmail"
            validationError="Please type in a valid email"
          />
          <br /><br />
          <RaisedButton className="newsletter-subscribe-button" type="submit" disabled={!this.state.canSubmit}>Subscribe</RaisedButton>
        </Formsy.Form>
      </div>
    );
    const thankYou = (
      <p>Thank you!</p>
    );
    return (
      <div className="newsletter-dialog-wrapper">
        <Dialog
          className="newsletter-dialog"
          title="JOIN OUR MAILING LIST"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          { this.state.submitted ? thankYou : form }
          <div className="newsletter-close" onClick={this.handleClose}>&times;</div>
        </Dialog>
      </div>
    );
  }
}
