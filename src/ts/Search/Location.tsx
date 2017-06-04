import * as React from 'react';
import {
  AutoComplete,
  FontIcon,
} from 'material-ui';
import i from '../i18n';
declare const google: any;

export default class Location extends React.Component<any, any> {
  service: any;
  filter: any;

  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.filter = props.filter;
    this.service = typeof google !== 'undefined' ? new google.maps.places.AutocompleteService() : null;
  }

  onNewRequest = (chosenRequest: string, index: number) => {
    this.filter(chosenRequest);
  }

  onUpdateInput = (input: string) => {
    if (this.service && input !== '') {
      this.service.getQueryPredictions({ input }, (predictions, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.setState({ data: predictions.map(p => p.description) });
        } else {
          this.setState({ data: ['Not found'] });
        }
      });
    } else {
      this.setState({ data: [] });
    }
  }

  render() {
    return (
      <div className="location">
        <FontIcon className="material-icons">{this.props.icon}</FontIcon>
        <div className="filter">
          <AutoComplete
            hintText={i('Find motorcycles to ride around ...')}
            maxSearchResults={5}
            openOnFocus={true}
            filter={AutoComplete.noFilter}
            onNewRequest={this.onNewRequest}
            onUpdateInput={this.onUpdateInput}
            dataSource={this.state.data}
            fullWidth={true}
            hintStyle={{ paddingLeft: 30 }}
            inputStyle={{ paddingLeft: 30 }}
          />
        </div>
      </div>);
  }
}
