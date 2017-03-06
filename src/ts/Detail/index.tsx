import * as React from 'react';
import Container from '../Container';

const traitsProps = [
  {
    label: 'Engine Type',
    units: '',
    key: 'engine',
  },
  {
    label: 'Capacity',
    units: 'cc',
    key: 'capacity',
  },
  {
    label: 'Max Power',
    units: 'HP',
    key: 'maxPower',
  },
  {
    label: 'Torque',
    units: 'Nm',
    key: 'torque',
  },
  {
    label: 'Seat Height',
    units: 'mm',
    key: 'seatHeight',
  },
];

export default function Detail() {
  const props = {
    image: 'http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Honda-CRF-450R-Motocross-Bike-PNG-Image.png',
    title: 'KTM250SX 2017',
    engine: '2-stroke',
    capacity: '249',
    maxPower: '45',
    torque: '28',
    seatHeight: '960',
  };

  const traits = traitsProps.map(item => (
    <div className="trait" key={item.key}>
      <div className="name">
        {item.label}:
      </div>
      <div className="value">
        {props[item.key] + item.units}
      </div>
    </div>));

  return (
    <Container>
      <div className="detail cont">
        <div className="image">
          <img src={props.image} />
        </div>
        <div className="params">
          <div className="title">
            {props.title}
          </div>
          {traits}
          <button className="ride-btn">
            <span className="raido">
              &#5809;
            </span>
            <span>
              IDE
            </span>
          </button>
        </div>
      </div>
    </Container>
  );
}
