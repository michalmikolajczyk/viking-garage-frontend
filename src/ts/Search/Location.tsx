import * as React from 'react';
import * as _ from 'lodash';
import AutocompletePure from './AutocompletePure';
import i from '../i18n';
declare const google: any;

export default class Location extends React.Component<any, any> {
  dataConfig = { text: 'description', value: 'place_id' };
  statusOk = typeof google !== 'undefined' ? google.maps.places.PlacesServiceStatus.OK : null;
  placesService = typeof google !== 'undefined' ? new google.maps.places.PlacesService(document.createElement('div')) : null;
  selectService = typeof google !== 'undefined' ? new google.maps.places.AutocompleteService() : null;

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: _.get(props, 'value.val', ''),
    };
  }

  componentWillReceiveProps(props) {
    if (_.has(props, 'value.val') && this.state.value !== props.value.val) {
      this.setState({ value: props.value.val });
    }
  }

  onNewRequest = (details, index) => {
    if (this.placesService && details) {
      const placeId = details['place_id'];
      this.placesService.getDetails({ placeId }, (place, status) => {
        if (status === this.statusOk) {
          this.props.filter({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            val: details.description,
          });
        }
      });
    }
  }

  onUpdateInput = (input) => {
    this.setState({ value: input });
    if (this.selectService && input) {
      this.selectService.getQueryPredictions({ input }, (predictions, status) => {
        this.setState({
          data: status === this.statusOk
          ? predictions
          : [i('Not found')],
        });
      });
    } else {
      this.setState({ data: [] });
    }
  }

  render() {
    return (
      <AutocompletePure
        icon="location_on"
        subId="search-location"
        hintText={i('Select place...')}
        searchText={this.state.value}
        dataConfig={this.dataConfig}
        dataSource={this.state.data}
        onNewRequest={this.onNewRequest}
        onUpdateInput={this.onUpdateInput}
      />
    );
  }
}
