import * as React from 'react';
import { Link } from 'react-router';
import { FontIcon } from 'material-ui';
import SearchPure from './SearchPure';
import Location from './Location';

export default class  MobileSearch extends React.Component<any, any> {
  state = { open: false };

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    const comp = (
      <div className="mobile-only">
        <Location
          appbar={true}
          toggle={this.toggle}
          value={this.props.location}
          filter={this.props.locationFilter}
        />
        <div className={`mobile-search ${this.state.open ? 'open' : ''}`}>
          <div className="wrap">
            <SearchPure {...this.props} />
            <button className="btn-main right" onClick={this.toggle}>
              <div>OK</div>
            </button>
          </div>
        </div>
      </div>
    );
    if (this.props.locationFilter) return comp;
    return <Link to="/">{comp}</Link>;
  }
}
