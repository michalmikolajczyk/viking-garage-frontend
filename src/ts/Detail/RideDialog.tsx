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
import NetworkError from '../Dialogs/NetworkError';
import { ride } from './api';
import i from '../i18n';

export default class RideDialog extends React.Component<any, any> {
  formsy: any;
  formvg: any;

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      wait: false,
      canSubmit: false,
      networkErr: false,
      rideSuccess: false,
    }
  }

  open = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  closeNetworkErr = () => this.setState({ networkErr: false });

  closeRideSuccess = () => this.setState({ rideSucess: false });

  submit = (user) => {
    this.setState({ wait: true });
    const {
      startDate,
      endDate,
      equipment,
    } = this.formvg.state;
    ride({
      ...user,
      startDate,
      endDate,
      equipment,
      offer: this.props.offer.id,
      total: this.formvg.getTotal(),
    })
      .then((res) => {
        if (res['err']) return this.setState({ networkErr: true, wait: false });
        this.props.success();
        this.setState({ open: false, wait: false });
      })
      .catch(err => this.setState({ networkErr: true, wait: false }));
  };

  render() {
    const title = _.get(this.props.offer, 'title', '');
    const actions = [
      <FlatButton
        label={i('Cancel')}
        primary={true}
        onTouchTap={this.close}
        disabled={this.state.wait}
      />,
      <FlatButton
        label={i('Submit')}
        primary={true}
        keyboardFocused={true}
        disabled={!this.state.canSubmit || this.state.wait}
        onTouchTap={() => this.formsy.submit()}
      />,
    ];

    return (
      <Dialog
        open={this.state.open}
        title={<div className="dialog-raido"><Raido /></div>}
        actions={actions}
        modal={false}
        autoScrollBodyContent={true}
      >
        <div className="ride-form">
          <div className="detail-form">
            <div className="dialog-title">
              {title}
            </div>
            <FormVG
              ref={(f) => this.formvg = f}
              {...this.props}
            />
            <div className="text">
              If you are interested in that ride, leave us your details- our team will contact you:
            </div>
          </div>
            <Form
              ref={(f) => this.formsy = f}
              onSubmit={this.submit}
              onValid={() => this.setState({ canSubmit: true })}
              onInvalid={() => this.setState({ canSubmit: false })}
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
              PS: You can also call us (WhatsApp works):
              <br />
              <a href="tel:+48697951264" target="_blank">
                Phone: +48 697 951 264
              </a>
          </div>
        </div>
        <NetworkError
          open={this.state.networkErr}
          close={this.closeNetworkErr}
        />
      </Dialog>
    );
  }
}
