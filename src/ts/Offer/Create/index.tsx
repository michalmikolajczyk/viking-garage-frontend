import * as React from 'react';
import {
  FlatButton,
  Paper,
  TextField,
} from 'material-ui';
import Container from '../../Container';
import Select from './Select';
import DropImage from './DropImage';
import General from './General';
import Sideview from './Sideview';
import Permissions from './Permissions';

import Inputs from '../../Accordion/Inputs';
import motorcycle from '../../helpers/models/motorcycle';

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
            <General />


          <Paper className="section">
            <div className="header">Details</div>
            <Inputs offer={motorcycle} />
          </Paper>



            <DropImage />
            <Permissions />
          </div>
          <div className="side-view">
            <Sideview />
          </div>
        </div>
      </Container>
    );
  }
}
