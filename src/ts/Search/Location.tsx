import * as React from 'react';
import {
  AutoComplete,
  FontIcon,
} from 'material-ui';
import i from '../i18n';
declare const google: any;

export default class Location extends React.Component<any, any> {
  filter: any;
  state = { data: [] };
  dataConfig = { text: 'description', value: 'place_id' }
  statusOk = typeof google !== 'undefined' ? google.maps.places.PlacesServiceStatus.OK : null;
  placesService = typeof google !== 'undefined' ? new google.maps.places.PlacesService(document.createElement('div')) : null;
  selectService = typeof google !== 'undefined' ? new google.maps.places.AutocompleteService() : null;

  onNewRequest = (details, index) => {
    if (this.placesService && details) {
      const placeId = details['place_id'];
      this.placesService.getDetails({ placeId }, (place, status) => {
        if (status === this.statusOk) {
          this.props.filter({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          });
        }
      })
    }
  }

  onUpdateInput = (input) => {
    if (this.selectService && input) {
      this.selectService.getQueryPredictions({ input }, (predictions, status) => {
        this.setState({
          data: status === this.statusOk
          ? predictions
          : [i('Not found')]
        });
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
            dataSourceConfig={this.dataConfig}
            fullWidth={true}
            hintStyle={{ paddingLeft: 30 }}
            inputStyle={{ paddingLeft: 30 }}
          />
        </div>
      </div>);
  }
}
