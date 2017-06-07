import * as React from 'react';
import * as _ from 'lodash';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import { Form } from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import Raido from '../Raido';
import FormPure from './FormPure';
import i from '../i18n';

export default class RideDialog extends React.Component<any, any> {
  formsy: any;
  state = { canSubmit: false }

  onValid = () => this.setState({ canSubmit: true })
  onInvalid = () => this.setState({ canSubmit: false })

  render() {
    const actions = [
      <FlatButton
        label={i('Cancel')}
        primary={true}
        onTouchTap={this.props.close}
        disabled={this.props.wait}
      />,
      <FlatButton
        label={i('Submit')}
        primary={true}
        keyboardFocused={true}
        disabled={!this.state.canSubmit || this.props.wait}
        onTouchTap={() => this.formsy.submit()}
      />,
    ];

    return (
      <Dialog
        open={this.props.open}
        title={<div className="dialog-raido"><Raido /></div>}
        actions={actions}
        modal={false}
        autoScrollBodyContent={true}
      >
        <div className="ride-form">
          <div className="detail-form">
            <div className="dialog-title">
              {_.get(this.props.offer, 'title', '')}
            </div>
            <FormPure {...this.props}/>
            <div className="text">
              {i('If you are interested in that ride, leave us your details - our team will contact you:')}
            </div>
          </div>
          <Form
            ref={(r) => this.formsy = r}
            onSubmit={this.props.submit}
            onValid={this.onValid}
            onInvalid={this.onInvalid}
          >
            <FormsyText
              className="text-input"
              name="name"
              required={true}
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
            {i('PS: You can also call us (WhatsApp works):')}
            <br />
            <a href="tel:+48697951264" target="_blank">
              {i('Phone:')} +48 697 951 264
            </a>
          </div>
        </div>
      </Dialog>
    );
  }
}
