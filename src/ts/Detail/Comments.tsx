import * as React from 'react';
import {
  FontIcon,
  Paper,
} from 'material-ui';
import * as _ from 'lodash';

export default function Comments(props) {
  const stars = _.times(5, i => <FontIcon key={i} className="material-icons">star</FontIcon>);
  return (
    <div className="comments">
      <Paper style={{ width: '100%' }} zDepth={2} rounded={false}>
        <div className="comments-cont">
          <div className="references">
            55 References
          </div>
          <div className="ratings">
            <div className="row">
              <div className="rate">
                <div className="type">Bike performance</div>
                <div className="stars">{stars}</div>
              </div>
              <div className="rate">
                <div className="type">Communication</div>
                <div className="stars">{stars}</div>
              </div>
            </div>
            <div className="row">
              <div className="rate">
                <div className="type">Mechanical condition</div>
                <div className="stars">{stars}</div>
              </div>
              <div className="rate">
                <div className="type">Rating</div>
                <div className="stars">{stars}</div>
              </div>
            </div>
          </div>
          <div className="comment">
            <div className="author">
              <div className="picture"></div>
              <div className="fullname">Gustaw Mikolajczyk</div>
              <div className="location">Warsaw, Poland</div>
            </div>
            <div className="text">
              The motorcycle looks and rides as described. Mint condition, raw power.
              <br/>
              I can also recommend the owner, he is my dad.
            </div>
          </div>
          <div className="comment">
            <div className="author">
              <div className="picture"></div>
              <div className="fullname">Henryk Mikolajczyk</div>
              <div className="location">Warsaw, Poland</div>
            </div>
            <div className="text">
              Aba. By that I mean a comment which is actually quite in-depth, but I can't really
              <br/>
              articulate it well just yet, because I am only two years old.
            </div>
          </div>
        </div>
        <div className="view-all">
          <a href="">View all references</a>
        </div>
      </Paper>
    </div>);
}
