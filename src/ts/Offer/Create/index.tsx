import * as React from 'react';
import Container from '../../Container';
import Select from './Select';
import DropImage from './DropImage';
import {
  FlatButton,
  Paper,
  TextField,
} from 'material-ui';

export default class Create extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { selected: 2 };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(event, index, selected) {
    this.setState({ selected });
  }

  render() {
    return (
      <Container close={true}>
        <div className="create">
          <div className="main-view">
            <Select selected={this.state.selected} onChange={this.onSelect} />
            <Paper className="section">
              <TextField
                floatingLabelText="Offer Title"
                fullWidth={true}
              />
              <TextField
                floatingLabelText="Description (max. 555 characters)"
                multiLine={true}
                rows={3}
                fullWidth={true}
                rowsMax={3}
              />
            </Paper>
            <DropImage />
            <Paper className="section">
              <div className="header">Permissions</div>
              <div className="body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisinuli.
              </div>
              <div className="buttons">
                <FlatButton label="More info" />
                <div>
                  <FlatButton label="Decline" />
                  <FlatButton label="Accept" />
                </div>
              </div>
            </Paper>
          </div>
          <div className="side-view">
            <Paper className="section">
              <div className="header">Permissions</div>
              <div className="body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisinuli.
              </div>
              <div className="buttons">
                <div />
                <FlatButton label="Accept" />
              </div>
            </Paper>
          </div>
        </div>
      </Container>
    );
  }
}
