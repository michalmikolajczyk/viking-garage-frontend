import * as React from 'react';
import * as _ from 'lodash';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import { Form } from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import Raido from '../Raido';
import FormVG from './FormVG';
import i from '../i18n';

export default class RideDialog extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      canSubmit: false,
    }
  }

  open = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  submit = () => {};

  actions = [
    <FlatButton
      label={i('Cancel')}
      primary={true}
      onTouchTap={this.close}
    />,
    <FlatButton
      label={i('Submit')}
      primary={true}
      keyboardFocused={true}
      onTouchTap={() => {}}
    />,
  ];

  render() {
    const title = _.get(this.props.offer, 'title', '');
    return (
      <Dialog
        open={this.state.open}
        title={<div className="dialog-raido"><Raido /></div>}
        actions={this.actions}
        modal={false}
        autoScrollBodyContent={true}
      >
        <div className="ride-form">
          <div className="detail-form">
            <div className="dialog-title">
              {title}
            </div>
            <FormVG {...this.props} />
            <div className="text">
              If you are interested in that ride, leave us your details- our team will contact you:
            </div>
          </div>
            <Form
              onValid={() => this.setState({ canSubmit: true })}
              onInvalid={() => this.setState({ canSubmit: false })}
              onSubmit={this.submit}
            >
              <FormsyText
                className="text-input"
                name="name"
                fullWidth={true}
                floatingLabelText={i('Your Name')}
                validations="minLength:3"
                validationError={i('Please add more characters (minimum 3)')}
              />
              <FormsyText
                className="text-input"
                name="email"
                required={true}
                fullWidth={true}
                floatingLabelText={i('Your Email Address')}
                validations="isEmail"
                validationError={i('Wrong e-mail address!')}
              />
            </Form>
            <div className="text">
              PS: You can also call us (WhatsApp works):
              <br />
              <a href="tel:+48697951264" target="_blank">
                Phone: +48 697 951 264
              </a>
          </div>
        </div>
      </Dialog>
    );
  }
}
