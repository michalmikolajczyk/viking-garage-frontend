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
import { Form } from 'formsy-react';
import debug from 'debug';
const log = debug('app:Offer/Create')

import Inputs from './Inputs';
import motorcycle from '../../helpers/models/motorcycle';

export default class Create extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      selected: 2,
      canSubmit: false,
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(event, index, selected) {
    this.setState({ selected });
  }

  onValid = () => this.setState({ canSubmit: true })
  onInvalid = () => this.setState({ canSubmit: false })

  submit(offer) {
    log('Submit offer', offer);
  }

  render() {
    return (
      <Container close={true}>
        <Form
          onValid={this.onValid}
          onInvalid={this.onInvalid}
          onSubmit={this.submit}
        >
          <div className="create">
            <div className="main-view">
              <Select selected={this.state.selected} onChange={this.onSelect} />
              <General />


            <Paper className="section">
              <div className="header">Motorcycle specification</div>
              <Inputs offer={motorcycle} />
            </Paper>

              <DropImage />
              <Permissions />
            </div>
            <div className="side-view">
              <Sideview />
            </div>
          </div>
        </Form>
      </Container>
    );
  }
}
