import React, { Component } from 'react';
import Container from 'Container';
import Search from 'Search';
import OffersList from './OffersList';

const request = (url) =>
  new Promise((res, rej) => {
    const data = [];
    const rand = Math.random();
    for (let i = 0; i < 4; i++) {
      data.push({
        title: 'KTM 250SX 2017',
        price: '$55$/d',
        approx: '3 km away',
        img: 'http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Honda-CRF-450R-Motocross-Bike-PNG-Image.png',
        key: rand + i,
      })
    }
    setTimeout(() => res(data), 1000);    
  })

export default class CardContainer extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    }
    this.loadMore = this.loadMore.bind(this);
  }

  public componentDidMount() {
    this.loadMore();
  }

  public loadMore() {
    this.setState({loading: true});
    request('url')
    .then(res => {
      this.setState({
        data: this.state.data.concat(res),
        loading: false,
      })
    })
  }

  public locationFilter(filter) {
    // new fetch
  }

  public typeFilter(filter) {
    // new fetch
  }

  public startDateFilter(filter) {
    // new fetch
  }

  public endDateFilter(filter) {
    // new fetch
  }

  public render() {
    return (
      <Container>
        <Search
          location={this.locationFilter}
          type={this.typeFilter}
          startDate={this.startDateFilter}
          endDate={this.endDateFilter}
        />
        <OffersList
          data={this.state.data}
          loading={this.state.loading}
          loadMore={this.loadMore}
        />
      </Container>
    );
  }
}
