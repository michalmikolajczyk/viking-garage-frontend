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
import accessories from '../../helpers/models/accessories';
import helmet from '../../helpers/models/helmet';
import motorcycle from '../../helpers/models/motorcycle';
import services from '../../helpers/models/services';

export default class Create extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { selected: 1 };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect = (event, index, selected) => this.setState({ selected })

  render() {
    return (
      <Container close={true}>
        <Form>
          <div className="create">
            <div className="main-view">
              <Select selected={this.state.selected} onChange={this.onSelect} />
              <General />

              <Paper className="section">
                <div className="header">Motorcycle specification</div>
                <Inputs offer={motorcycle} />
              </Paper>

              <DropImage />

              <Paper className="section">
                <Inputs offer={helmet} type="Helmet" />
                <Inputs offer={services} type="Services" />
                <Inputs offer={accessories} type="Accessories" />
              </Paper>

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
