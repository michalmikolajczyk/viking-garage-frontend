import React, { Component } from 'react';
import {
  AutoComplete,
  FontIcon,
} from 'material-ui';

declare const config: any;
declare const google: any;

export default class Location extends Component<any, any> {

  public service: any;
  public filter: any;

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      load: false,
    };
    this.filter = props.filter;
    this.displayData = this.displayData.bind(this);
    this.onNewRequest = this.onNewRequest.bind(this);
    this.onUpdateInput = this.onUpdateInput.bind(this);
  }

  public componentDidMount() {
    if (typeof window !== 'undefined') {
      const API_KEY = config.GOOGLE_MAP_API;
      window['initMap'] = () => {
        this.service = new google.maps.places.AutocompleteService();
        this.setState({load: true});
      }
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initMap`;
      document.body.appendChild(script);
    }
  }

  public displayData(predictions, status) {
    const data = status != google.maps.places.PlacesServiceStatus.OK
      ? ['Not found']
      : predictions.map(p => p.description);
    this.setState({data});
  }

  public onNewRequest(chosenRequest: string, index: number) {
    this.filter(chosenRequest);
  }

  public onUpdateInput(text: string) {
    if (this.state.load && text !== '') {
      this.service.getQueryPredictions({input: text}, this.displayData)
    } else {
      this.setState({data: []});
    }
  }

  public render() {
    return (
      <div className="location">
        <FontIcon className="material-icons">location_on</FontIcon>
        <AutoComplete
          hintText="Gran Canaria"
          maxSearchResults={5}
          openOnFocus={true}
          filter={AutoComplete.noFilter}
          onNewRequest={this.onNewRequest}
          onUpdateInput={this.onUpdateInput}
          dataSource={this.state.data}
        />
      </div>);
  }
}
