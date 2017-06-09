import * as React from 'react';
import { Form } from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import i from '../i18n';

export default function ContactForm(props) {
  const {
    submit,
    onValid,
    onInvalid,
  } = props;

  return (
    <div>
      <Form
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
        <FormsyText
          className="text-input"
          name="message"
          fullWidth={true}
          floatingLabelText={i('Message (optional)')}
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
  );
}
