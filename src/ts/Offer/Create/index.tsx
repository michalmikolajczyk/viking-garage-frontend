import * as React from 'react';
import Container from '../../Container';
import Select from './Select';
import DropImage from './DropImage';

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
        <div className="create cont">
          <Select selected={this.state.selected} onChange={this.onSelect} />
          <DropImage />
        </div>
      </Container>
    );
  }
}
