import * as React from 'react';
declare const google: any;

export default class Grupon extends React.Component<any, any> {
  componentDidMount() {
    this.renderMap();
  }

  renderMap() {
    const warszawa = { lat: 52.179574, lng: 21.048174 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: warszawa,
    });

    const barbara = {
      coord: { lat: 51.999360, lng: 20.770946 },
      content: 'Tarczyn<br />Tor Barbara<br />Tarczyn, 05-555',
    };
    const kalwaria = {
      coord: { lat: 51.965380, lng: 21.207124 },
      content: 'Góra Kalwaria<br />Tor Góra Kalwaria<br />Góra Kalwaria, 05-530',
    };
    const papiernia = {
      coord: { lat: 52.310334, lng: 21.492602 },
      content: 'Papiernia<br />Wołomińska 23<br />Papiernia, 05-304',
    };
    const markers = [barbara, kalwaria, papiernia];
    const infowindow = new google.maps.InfoWindow({ content: '' });
    markers.forEach((item, key) => {
      const marker = new google.maps.Marker({
        map,
        icon: `http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=${key + 1}|BB0003|FFFFFF`,
        position: item.coord,
      });
      google.maps.event.addListener(marker, 'click', () => {
        infowindow.setContent(item.content);
        infowindow.open(map, marker);
      });
    });
  }

  render() {
    return (
      <div>
        <p className="bold">Lokalizacja: </p>
        <div className="map-wrap">
          <div id="map"></div>
          <div className="map-addr">
            <div className="addr">
              1. Tarczyn
              <br />
              Tor Barbara
              <br />
              Tarczyn, 05-555
            </div>
            <div className="addr">
              2. Góra Kalwaria
              <br />
              Tor Góra Kalwaria
              <br />
              Góra Kalwaria, 05-530
            </div>
            <div className="addr">
              3. Papiernia
              <br />
              Wołomińska 23
              <br />
              Papiernia, 05-304
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
