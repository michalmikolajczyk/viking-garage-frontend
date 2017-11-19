import * as React from 'react';
import { Form } from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import i18n from '../i18n';
const i = i18n;

interface props {
  onValid: Function;
  onInvalid: Function;
  submit: Function;
}

export default class ContactForm extends React.Component<props, null> {
  form: any;

  submit = () => this.form.submit();

  render() {
    const {
      submit,
      onValid,
      onInvalid,
    } = this.props;

    return (
      <div>
        <Form
          ref={f => this.form = f}
          onSubmit={submit}
          onValid={onValid}
          onInvalid={onInvalid}
          className="contact-form"
        >
          <FormsyText
            className="text-input"
            name="name"
            required={true}
            fullWidth={true}
            floatingLabelText={i('Your Name')}
            validations="minLength:2"
            validationError={i('Please add more characters (minimum 2)')}
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
          <FormsyText
            className="text-input"
            name="message"
            fullWidth={true}
            floatingLabelText={i('Message (optional)')}
          />
        </Form>
      </div>
    );
  }
}
