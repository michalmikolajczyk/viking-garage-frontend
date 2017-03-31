import * as React from 'react';
import {
  FontIcon,
  Paper,
} from 'material-ui';
import * as _ from 'lodash';
import i from '../i18n';
import { default as comments } from './comments-mockup';

export default class Comments extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 2,
      loading: true,
      fetching: false,
      comments: [],
    };
    this.comment = this.comment.bind(this);
    this.rating = this.rating.bind(this);    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() { this.fetch(); }

  fetch() {
    this.setState({ fetching: true });
    setTimeout(
      () => {
        this.setState({
          loading: false,
          fetching: false,
          rating: comments.rating,
          references: comments.references,
          comments: [
            ...this.state.comments,
            ...comments.comments,
          ],
        });
      },
      2000);
  }

  render() {
    const more = this.state.fetching ? <div>{i('Loading comments')}</div> : <div onClick={this.fetch}>{i('View all references')}</div>;
    const body = this.state.loading
      ? <div>{i('Loading comments')}...</div>
      : (
        <div>
          <div className="comments-cont">
            <div className="references">{this.state.references} {i('References')}</div>
            {this.rating()}
            {this.comment()}
          </div>
          <div className="view-all">
            {more}
          </div>
        </div>
      );

    return (
      <div className="comments">
        <Paper style={{ width: '100%' }} zDepth={2} rounded={false}>
          {body}
        </Paper>
      </div>
    );
  }

  comment() {
    return this.state.comments.map(({ author, text }, index) => {
      return (
        <div className="comment" key={index}>
          <div className="author">
            <div className="picture" style={{ background: `url(${author.picture})` }} />
            <div className="fullname">{author.name}</div>
            <div className="location">{author.location}</div>
          </div>
          <div className="text">{text}</div>
        </div>);
      });
  }

  stars(rate) {
    return _.times(5, (i) => {
      if (rate < i + 0.5) {
        return <FontIcon key={i} className="material-icons">star_border</FontIcon>;
      } else if (rate < i + 1) {
        return <FontIcon key={i} className="material-icons">star_half</FontIcon>;
      } else {
        return <FontIcon key={i} className="material-icons">star</FontIcon>;
      }
    });
  }

  rating() {
    const {
      general,
      condition,
      performance,
      communication,
    } = this.state.rating;

    return (
      <div className="ratings">
        <div className="row">
          <div className="rate">
            <div className="type">{i('Bike performance')}</div>
            <div className="stars">{this.stars(performance)}</div>
          </div>
          <div className="rate">
            <div className="type">{i('Communication')}</div>
            <div className="stars">{this.stars(communication)}</div>
          </div>
        </div>
        <div className="row">
          <div className="rate">
            <div className="type">{i('Mechanical condition')}</div>
            <div className="stars">{this.stars(condition)}</div>
          </div>
          <div className="rate">
            <div className="type">{i('Rating')}</div>
            <div className="stars">{this.stars(general)}</div>
          </div>
        </div>
      </div>
    );
  }
}
