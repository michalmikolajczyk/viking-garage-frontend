import * as React from 'react';
import * as _ from 'lodash';
import {
  FontIcon,
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui';
import Header from './Header';

function createTable(items) {
  const half = Math.ceil(items.length/2);
  const table = _.map(_.range(half), (index) => (
    <div className="tr" key={index}>
      <div className="td">
        <div className="col">{items[index][0]}</div>
        <div className="col">{items[index][1]}</div>
      </div>
      <div className="td">
        <div className="col">{items[index + half] && items[index + half][0]}</div>
        <div className="col">{items[index + half] && items[index + half][1]}</div>
      </div>
    </div>));

  return <div className="table">{table}</div>;
}

export default class Accordion extends React.Component<any, any> {
  private header: any;
  private tablebody: any;

  constructor(props) {
    super(props);
    const {
      open,
      items,
      header,
    } = props;
    this.state = { open };
    this.header = header;
    this.tablebody = createTable(items);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const table = this.state.open ? this.tablebody : null;
    const icon = this.state.open
      ? <FontIcon className="material-icons">expand_less</FontIcon>
      : <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>;
    const header = this.header && <Header call={this.toggle} icon={icon} head={this.header} />;

    return (
      <div className="accordion">
        {header}
        {table}
      </div>
    );
  }
}
