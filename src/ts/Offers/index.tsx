import * as React from 'react';
import Cardgrid from './Cardgrid';

export default class CardContainer extends React.Component<any, any> {

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
    setTimeout(() => this.setState({
      data: this.state.data.concat(data),
      loading: false,
    }), 2000);
  }

  public render() {
    return (
      <Cardgrid
        data={this.state.data}
        loading={this.state.loading}
        loadMore={this.loadMore}
      />
    );
  }
}
