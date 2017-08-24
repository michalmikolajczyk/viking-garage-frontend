import * as React from 'react';
import { browserHistory } from 'react-router';
import * as _ from 'lodash';
import { AutoComplete } from 'material-ui';
import {
  IFiltersFuncs,
  IFiltersValue,
} from '../typings';
import MobileSearch from './MobileSearch';
import IconWrap from '../IconWrap';
import i from '../i18n';
declare const google: any;

interface FullTextProps {
  filtersFuncs: IFiltersFuncs;
  filtersValue: IFiltersValue;
}

export default class FullText extends React.Component<FullTextProps, any> {
  state = {
    data: [],
    open: false,
    value: '',
  };
  dataConfig = { text: 'description', value: 'place_id' };
  statusOk = typeof google !== 'undefined'
    && google.maps.places.PlacesServiceStatus.OK;
  placesService = typeof google !== 'undefined'
    && new google.maps.places.PlacesService(document.createElement('div'));
  selectService = typeof google !== 'undefined'
    && new google.maps.places.AutocompleteService();

  mediaQueryNarrowCheck = matchMedia ? matchMedia('(max-width: 959px, orientation: landscape)') : {matches: true}

  toggle = () => this.setState({ open: !this.state.open });

  onNewRequest = (details, index) => {
    if (this.placesService && details) {
      const placeId = details['place_id'];
      this.placesService.getDetails({ placeId }, (place, status) => {
        if (status === this.statusOk) {
          this.props.filtersFuncs.locationFilter({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            val: details.description,
          });
          return browserHistory.push('/');
        }
      });
    }
  }

  onUpdateInput = (input) => {
    this.setState({ value: input });
    if (this.selectService && input) {
      this.selectService.getQueryPredictions({ input }, (predictions, status) => {
        return this.setState({
          data: status === this.statusOk
          ? predictions
          : [i('Not found')],
        });
      });
    }
    return this.setState({ data: [] });
  }

  render() {
    const mobileSearchRender = this.mediaQueryNarrowCheck.matches && (
      <MobileSearch
        {...this.props}
        open={this.state.open}
        toggle={this.toggle}
      />
    )

    return (
      <div>
        <div className="filter appbar-search">
          <IconWrap icon="search" aria="search by any word" />
          <div className="input">
            <AutoComplete
              id="search-location"
              value={this.state.value}
              maxSearchResults={5}
              openOnFocus={true}
              filter={AutoComplete.noFilter}
              onNewRequest={this.onNewRequest}
              onUpdateInput={this.onUpdateInput}
              dataSource={this.state.data}
              dataSourceConfig={this.dataConfig}
              fullWidth={true}
              hintStyle={{ paddingLeft: 30 }}
            />
            <button className="right-btn" onClick={this.toggle}>
              <IconWrap icon="keyboard_arrow_down" aria="show filters" />
            </button>
          </div>
        </div>
        {mobileSearchRender}
      </div>
    );
  }
}
