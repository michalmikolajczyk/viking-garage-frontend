import * as React from 'react';
import { Link } from 'react-router';
import AppBarVG from '../AppBarVG';
import i18n from '../i18n';
import * as types from './blogTypes';
import * as Formsy from 'formsy-react';
import * as api from './api';
import { 
  FormsyDate,
  FormsyText,
 } from 'formsy-material-ui/lib';
const ReactQuill = require('react-quill');
const i = i18n;

interface BlogFormState {
  post: types.BlogPost;
  text: string;
  canSubmit: boolean;
};

export default class BlogForm extends React.Component<any, BlogFormState> {
  slug;
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
      text: '',  // You can also pass a Quill Delta here
      canSubmit: false,
      post,
    };
  }

  disableButton = () => {
    this.setState({ canSubmit: false });
  }

  enableButton = () => {
    this.setState({ canSubmit: true });
  }

  handleBodyChange = (value) => {
    this.setState({ text: value });
  }

  handleTitleChange = (value) = {

  }

  submit = (model) => {
    const post = Object.assign({}, model, { body: this.state.text });
    console.log(post);
    this.setState({ post }, () => {

    });
  }
  
  render() {
    const props = this.props;
    return (
      <div>
        <AppBarVG {...this.props} />
        <div className="page">
          <div className="page-body">
            <h1 className="title heading-one page-title">VIKING GARAGE Form</h1>
            <h2 className="head">Coming soon!</h2>
            <Formsy.Form
              onValidSubmit={this.submit}
              onValid={this.enableButton}
              onInvalid={this.disableButton}
            >
              <FormsyText
                name="title"
                required
                hintText="Grab a cool title"
                floatingLabelText="Post Title"
                onChange={this.handleTitleChange}
              />
              <FormsyText
                name="slug"
                ref={ref => this.slug = ref}
                required
                hintText="Unique path"
                floatingLabelText="Post path url"
              />
              <ReactQuill
                theme="snow"
                value={this.state.text}
                onChange={this.handleBodyChange}
              />
              <FormsyDate
                name="createdAt"
                floatingLabelText="Created At"
              />
              <FormsyDate
                name="updatedAt"
                floatingLabelText="Created At"
              />
              <button type="submit" disabled={!this.state.canSubmit}>Save post</button>
            </Formsy.Form>
          </div>
        </div>
      </div>
    );
  }
}
