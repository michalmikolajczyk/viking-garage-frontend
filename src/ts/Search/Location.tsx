import * as React from 'react';
import {
  AutoComplete,
  FontIcon,
} from 'material-ui';
import i from '../i18n';

declare const config: any;
declare const google: any;

export default class Location extends React.Component<any, any> {
  service: any;
  filter: any;

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      load: false,
    };
    this.filter = props.filter;
  }

  componentDidMount() {
    // in case of re-creating component we do not need another script
    if (typeof google !== 'undefined') {
      return this.initMap();
    }
    if (typeof window !== 'undefined') {
      if (document.getElementById('google-maps-script')) {
        const call = window['initMap'];
        window['initMap'] = () => {
          call();
          this.initMap();
        };
      } else {
        const API_KEY = config.GOOGLE_MAP_API;
        window['initMap'] = this.initMap;
        const script = document.createElement('script');
        script.id = 'google-maps-script';
        script.type = 'text/javascript';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initMap`;
        document.body.appendChild(script);
      }
    }
  }

  initMap = () => {
    this.service = new google.maps.places.AutocompleteService();
    this.setState({ load: true });
  }

  displayData = (predictions, status) => {
    const data = status !== google.maps.places.PlacesServiceStatus.OK
      ? ['Not found']
      : predictions.map(p => p.description);
    this.setState({ data });
  }

  onNewRequest = (chosenRequest: string, index: number) => {
    this.filter(chosenRequest);
  }

  onUpdateInput = (text: string) => {
    if (this.state.load && text !== '') {
      this.service.getQueryPredictions({ input: text }, this.displayData);
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
            hintText={i('Search')}
            maxSearchResults={5}
            openOnFocus={true}
            filter={AutoComplete.noFilter}
            onNewRequest={this.onNewRequest}
            onUpdateInput={this.onUpdateInput}
            dataSource={this.state.data}
            fullWidth={true}
          />
        </div>
      </div>);
  }
}
