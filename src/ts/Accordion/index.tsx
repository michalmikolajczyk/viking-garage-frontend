import * as React from 'react';
import IconWrap from '../IconWrap';
import Header from './Header';
import Table from './Table';

export default class Accordion extends React.Component<any, any> {
  constructor(props) {
    super(props);
    const { open } = props;
    this.state = { open };
  }

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    const icon = this.state.open
      ? <IconWrap aria="hide" icon="expand_less" />
      : <IconWrap aria="show more" icon="keyboard_arrow_down" />;

    return (
      <div className="accordion">
        <Header call={this.toggle} icon={icon} head={this.props.header} />
        {this.state.open && <Table offer={this.props.offer}/>}
      </div>
    );
  }
}
