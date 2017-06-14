import * as React from 'react';
import * as _ from 'lodash';
import {
  Dialog,
  FlatButton,
} from 'material-ui';
import Reaction from './Reaction';
import ContactForm from './ContactForm';
import NetworkError from '../Dialogs/NetworkError';
import Raido from '../Raido';
import i from '../i18n';
import { contact } from './api';

interface props {
  type: string;
  title?: string;
  button: any;
  success: object;
  message?: Function;
}

export default class Contact extends React.Component<props, any> {
  formsy: any;
  state = {
    open: false,
    wait: false,
    canSubmit: false,
    openDialog: false,
    networkErr: false,
  }

  submit = (data) => {
    const body = this.props.message && this.props.message();
    this.setState({ wait: true });
    contact({ ...data, body, type: this.props.type })
      .then((res) => {
        if (res && res['err']) return this.setState({ networkErr: true, wait: false });
        this.setState({
          wait: false,
          open: false,
          openDialog: true,
        });
      })
      .catch(err => this.setState({ networkErr: true, wait: false }));
  }

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  onValid = () => this.setState({ canSubmit: true });
  onInvalid = () => this.setState({ canSubmit: false });
  closeOpenDialog = () => this.setState({ openDialog: false });
  closeNetworkErr = () => this.setState({ networkErr: false });

  render() {
    const {
      title,
      button,
      success,
      children,
    } = this.props;

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
      <div>
        <div className="inputs">
          <button
            onClick={this.open}
            className="contact-submit">
            {this.props.button}
          </button>
        </div>
        <Dialog
          modal={false}
          actions={actions}
          open={this.state.open}
          autoScrollBodyContent={true}
          title={title || <div className="dialog-raido"><Raido /></div>}
        >
          <div className="contact-body">
            {this.props.children}
            <ContactForm
              ref={f => this.formsy = f}
              submit={this.submit}
              onValid={this.onValid}
              onInvalid={this.onInvalid}
            />
          </div>
        </Dialog>
        <NetworkError
          open={this.state.networkErr}
          close={this.closeNetworkErr}
        />
        <Reaction
          data={success}
          open={this.state.openDialog}
          close={this.closeOpenDialog}
        />
      </div>
    );
  }
}
