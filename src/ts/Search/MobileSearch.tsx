import * as React from 'react';
import { FontIcon } from 'material-ui';
import Search from './';
import Location from './Location';

export default class  MobileSearch extends React.Component<any, any> {
  state = { open: false };

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <Location
          appbar={true}
          toggle={this.toggle}
        />
        <div className={`mobile-search ${this.state.open ? 'open' : ''}`}>
          <div className="wrap">
            <Search {...this.props} />
            <button className="btn-main right-btn" onClick={this.toggle}>
              OK
            </button>
          </div>
        </div>
      </div>
    );
  }
}
