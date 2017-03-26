import * as React from 'react';
import {
  DropDownMenu,
  FontIcon,
  MenuItem,
} from 'material-ui';
import Container from '../../Container';

const select = [
  'accessories',
  'helmet',
  'motorcycle',
  'protection',
  'services',
];

export default class Create extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      selected: 2,
    };
  }


  handleChange() {}

  render() {
    const selectList = select.map((s, i) => <MenuItem key={i} value={i} primaryText={s} />)

    return (
      <Container close={true}>
        <div className="create cont">
          <div className="title">
            <span className="text">Add new offer:</span>
            <DropDownMenu
              value={this.state.selected}
              onChange={this.handleChange}
              labelStyle={{ fontSize: 34, textDecoration: 'underline', paddingLeft: 14 }}
              listStyle={{ marginLeft: 10 }}
              underlineStyle={{ borderTop: 'none' }}
              iconStyle={{ display: 'none' }}
            >
              {selectList}
            </DropDownMenu>
            <FontIcon
              className="material-icons"
              style={{ fontSize: 34 }}
            >keyboard_arrow_down</FontIcon>
        </div>
        </div>
      </Container>
    );
  }
}
